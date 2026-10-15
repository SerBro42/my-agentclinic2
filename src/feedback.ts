export const FEEDBACK_CATEGORIES = [
  'General feedback',
  'Bug report',
  'Suggestion',
  'Other',
] as const;

export type FeedbackCategory = (typeof FEEDBACK_CATEGORIES)[number];

export const MAX_FEEDBACK_NAME_LENGTH = 120;
export const MAX_FEEDBACK_EMAIL_LENGTH = 254;
export const MAX_FEEDBACK_MESSAGE_LENGTH = 2000;

export interface FeedbackFormValues {
  name: string;
  email: string;
  category: string;
  message: string;
}

export function isFeedbackCategory(value: string): value is FeedbackCategory {
  return (FEEDBACK_CATEGORIES as readonly string[]).includes(value);
}

export function validateFeedback(values: FeedbackFormValues): string | null {
  if (!values.name) {
    return 'Enter your name.';
  }
  if (values.name.length > MAX_FEEDBACK_NAME_LENGTH) {
    return `Names must be ${MAX_FEEDBACK_NAME_LENGTH} characters or fewer.`;
  }
  if (!values.email || values.email.length > MAX_FEEDBACK_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return `Enter a valid email address of ${MAX_FEEDBACK_EMAIL_LENGTH} characters or fewer.`;
  }
  if (!isFeedbackCategory(values.category)) {
    return 'Choose a feedback category.';
  }
  if (!values.message) {
    return 'Enter a message.';
  }
  if (values.message.length > MAX_FEEDBACK_MESSAGE_LENGTH) {
    return `Messages must be ${MAX_FEEDBACK_MESSAGE_LENGTH} characters or fewer.`;
  }
  return null;
}
