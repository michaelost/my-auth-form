export enum Rules {
    MIN_LENGTH = 'minLength',
    MAX_LENGTH = 'maxLength',
    UPPERCASE = 'uppercase',
    NUMBER = 'number',
  }
  
export const Hints: { [key in Rules]: string } = {
  [Rules.MIN_LENGTH]: 'At least 8 characters',
  [Rules.MAX_LENGTH]: 'No more than 64 characters',
  [Rules.UPPERCASE]: 'At least one uppercase letter',
  [Rules.NUMBER]: 'At least one number',
};
  