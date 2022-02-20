export const isEmpty = val => val.trim().length === 0;
export const isEmail = val =>
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);
export const isPassword = val => /^\S*$/.test(val);
export const isValidMinLength = min => val =>
  val.length >= min;
export const isValidMaxLength = max => val =>
  val.length <= max;
export const isEqual = val1 => val2 =>
  val1 === val2;
export const hasCapitalLetter = val => /[A-Z]/.test(val);