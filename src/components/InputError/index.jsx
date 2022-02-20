import React from 'react';
import { InputErrorStyled } from './styled';

const InputError = ({ touched, error }) => (
  <InputErrorStyled {...{ touched, error }}>{error}</InputErrorStyled>
);

export default InputError;