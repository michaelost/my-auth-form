export enum ValidationErrors {
  REQUIRED = 'This field is required',
  INVALID_EMAIL = 'Invalid email address',
  PASSWORD_MIN_LENGTH = 'Password must be at least 8 characters',
  PASSWORD_MAX_LENGTH = 'Password must be at most 64 characters',
  PASSWORD_PATTERN = 'Password must have at least one uppercase letter and one number',
}