import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { DatabaseSync } from 'node:sqlite';

import { createApp } from './app';
import { initializeDatabase, listFeedback, openDatabase } from './database';
import { FEEDBACK_CATEGORIES, validateFeedback } from './feedback';

describe('AgentClinic feedback', () => {
  let database: DatabaseSync;
  let app: ReturnType<typeof createApp>;

  beforeEach(() => {
    database = openDatabase(':memory:');
    app = createApp(database);
  });

  afterEach(() => {
    database.close();
    vi.restoreAllMocks();
  });

  it('renders an accessible feedback form and navigation link', async () => {
    const response = await app.request('http://localhost/feedback');

    expect(response.status).toBe(200);
    const html = await response.text();
    expect(html).toContain('href="/feedback">Feedback</a>');
    expect(html).toContain('name="name"');
    expect(html).toContain('name="email"');
    expect(html).toContain('name="category"');
    expect(html).toContain('name="message"');
    expect(html).toContain('Choose a category');
  });

  it('validates required fields, email, categories, and length limits', () => {
    const base = {
      name: 'Alex',
      email: 'alex@example.com',
      category: FEEDBACK_CATEGORIES[0],
      message: 'Helpful feedback',
    };

    expect(validateFeedback({ ...base, name: '' })).toBe('Enter your name.');
    expect(validateFeedback({ ...base, email: 'not-an-email' })).toContain('valid email');
    expect(validateFeedback({ ...base, category: '' })).toBe('Choose a feedback category.');
    expect(validateFeedback({ ...base, message: '' })).toBe('Enter a message.');
    expect(validateFeedback({ ...base, name: 'a'.repeat(121) })).toContain('120 characters');
    expect(validateFeedback({ ...base, email: `${'a'.repeat(243)}@example.com` })).toContain('254 characters');
    expect(validateFeedback({ ...base, category: 'Unlisted category' })).toBe('Choose a feedback category.');
    expect(validateFeedback({ ...base, message: 'a'.repeat(2001) })).toContain('2000 characters');
    expect(validateFeedback({ ...base, name: 'a'.repeat(120), email: `${'a'.repeat(239)}@x.com`, message: 'a'.repeat(2000) })).toBeNull();
  });

  it('rejects invalid submissions without storing them and preserves entered values', async () => {
    const response = await app.request('http://localhost/feedback', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        name: ' Alex ',
        email: 'bad address',
        category: FEEDBACK_CATEGORIES[0],
        message: 'Please fix this.',
      }),
    });

    expect(response.status).toBe(400);
    const html = await response.text();
    expect(html).toContain('Enter a valid email address');
    expect(html).toContain('value="Alex"');
    expect(listFeedback(database)).toHaveLength(0);
  });

  it('persists valid submissions and confirms them after redirect', async () => {
    const response = await app.request('http://localhost/feedback', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        name: 'Alex Agent',
        email: 'alex@example.com',
        category: 'Suggestion',
        message: 'Please add a quiet recovery room.',
      }),
    });

    expect(response.status).toBe(303);
    expect(response.headers.get('location')).toBe('/feedback?submitted=1');
    expect(listFeedback(database)).toMatchObject([
      {
        id: 1,
        name: 'Alex Agent',
        email: 'alex@example.com',
        category: 'Suggestion',
        message: 'Please add a quiet recovery room.',
      },
    ]);

    const confirmation = await app.request('http://localhost/feedback?submitted=1');
    expect(confirmation.status).toBe(200);
    expect(await confirmation.text()).toContain('Your feedback has been received.');
  });

  it('shows saved feedback on the dashboard and provides an empty state', async () => {
    const emptyDashboard = await app.request('http://localhost/dashboard');
    expect(await emptyDashboard.text()).toContain('No feedback has been submitted yet.');

    await app.request('http://localhost/feedback', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        name: 'Alex Agent',
        email: 'alex@example.com',
        category: 'General feedback',
        message: '<script>be kind</script>',
      }),
    });

    const dashboard = await app.request('http://localhost/dashboard');
    const html = await dashboard.text();
    expect(html).toContain('anyone with access to this dashboard');
    expect(html).toContain('alex@example.com');
    expect(html).toContain('&lt;script&gt;be kind&lt;/script&gt;');
    expect(html).not.toContain('<script>be kind</script>');
  });

  it('keeps feedback when initialization is repeated', async () => {
    await app.request('http://localhost/feedback', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        name: 'Alex',
        email: 'alex@example.com',
        category: 'Other',
        message: 'Please keep the clinic running.',
      }),
    });

    initializeDatabase(database);

    expect(listFeedback(database)).toHaveLength(1);
    expect(
      database.prepare('SELECT version FROM schema_migrations ORDER BY version').all()
        .map((row) => row.version),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('returns a safe error instead of success when feedback storage fails', async () => {
    database.exec('DROP TABLE feedback');
    const logError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const response = await app.request('http://localhost/feedback', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        name: 'Alex',
        email: 'alex@example.com',
        category: 'Other',
        message: 'Please keep the clinic running.',
      }),
    });

    expect(response.status).toBe(500);
    const html = await response.text();
    expect(html).toContain('The clinic could not complete your request');
    expect(html).not.toContain('no such table');
    expect(logError).toHaveBeenCalledOnce();
  });
});
