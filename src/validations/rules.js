export const hasCapitalLetter = (str) =>
  /[A-Z]/.test(str) || 'Password must contain at least one capital letter';

export const hasLowerCaseLetter = (str) =>
  /[a-z]/.test(str) || 'Password must contain at least one lower case letter';

export const hasNumber = (str) =>
  /[0-9]/.test(str) || 'Password must contain at least one number';

export const hasSymbol = (str) =>
  /[!@#$%^&*()]/.test(str) || 'Password must contain at least one symbol';
