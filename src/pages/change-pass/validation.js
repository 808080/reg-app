import {
  isEmpty,
  isEqual,
  isPassword,
  isValidMinLength,
  isValidMaxLength,
  hasCapitalLetter
} from '../../utils/validators';

const validate = (values) => {
  const errors = {};

  Object.keys(values).forEach(key => {
    if (isEmpty(values[key])) {
      errors[key] = 'Required';
    }
  });

  if (!isPassword(values.prev)) {
    errors.prev = 'Password must not contain whitespaces';
  }

  if (!hasCapitalLetter(values.prev)) {
    errors.prev = 'Password must contain at least one capital latin character';
  }

  if (!isValidMinLength(4)(values.prev) || !isValidMaxLength(10)(values.prev)) {
    errors.prev = 'Password must contain from 4 to 10 symbols';
  }

  if (!isPassword(values.password)) {
    errors.password = 'Password must not contain whitespaces';
  }

  if (!hasCapitalLetter(values.password)) {
    errors.password = 'Password must contain at least one capital latin character';
  }

  if (!isValidMinLength(4)(values.password) || !isValidMaxLength(10)(values.password)) {
    errors.password = 'Password must contain from 4 to 10 symbols';
  }

  if (!isEqual(values.password)(values.confirm)) {
    errors.confirm = 'Wrong confirmation password';
  }

  return errors;
};

export default validate;