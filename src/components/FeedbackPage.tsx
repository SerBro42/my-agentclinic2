import {
  FEEDBACK_CATEGORIES,
  MAX_FEEDBACK_EMAIL_LENGTH,
  MAX_FEEDBACK_MESSAGE_LENGTH,
  MAX_FEEDBACK_NAME_LENGTH,
} from '../feedback';
import type { FeedbackFormValues } from '../feedback';
import { Layout } from './Layout';

type FeedbackPageProps = {
  error?: string;
  submitted?: boolean;
  values?: FeedbackFormValues;
};

const emptyValues: FeedbackFormValues = {
  name: '',
  email: '',
  category: '',
  message: '',
};

export const FeedbackPage = ({
  error,
  submitted = false,
  values = emptyValues,
}: FeedbackPageProps) => (
  <Layout>
    <h1>Share feedback</h1>
    <p>Your thoughts help us make AgentClinic a more supportive place for agents and staff.</p>
    {submitted ? <p role="status">Thank you. Your feedback has been received.</p> : null}
    {error ? <p id="feedback-error" role="alert">{error}</p> : null}
    <form method="post" action="/feedback" aria-describedby={error ? 'feedback-error' : undefined}>
      <label for="feedback-name">Name</label>
      <input
        id="feedback-name"
        name="name"
        required
        maxlength={MAX_FEEDBACK_NAME_LENGTH}
        value={values.name}
      />

      <label for="feedback-email">Email</label>
      <input
        id="feedback-email"
        name="email"
        type="email"
        required
        maxlength={MAX_FEEDBACK_EMAIL_LENGTH}
        value={values.email}
      />

      <label for="feedback-category">Category</label>
      <select id="feedback-category" name="category" required>
        <option value="" selected={!values.category}>Choose a category</option>
        {FEEDBACK_CATEGORIES.map((category) => (
          <option value={category} selected={values.category === category}>{category}</option>
        ))}
      </select>

      <label for="feedback-message">Message</label>
      <textarea
        id="feedback-message"
        name="message"
        required
        maxlength={MAX_FEEDBACK_MESSAGE_LENGTH}
        rows={6}
      >{values.message}</textarea>
      <p class="field-hint">Up to {MAX_FEEDBACK_MESSAGE_LENGTH} characters.</p>

      <button type="submit">Send feedback</button>
    </form>
  </Layout>
);
