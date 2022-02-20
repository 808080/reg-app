import React from 'react';
import { InputStyled } from './styled';
import InputError from '../InputError';

const Input = ({ touched, error, ...props }) => (
  <InputStyled>
    <label className='input' htmlFor={props.name}>
      <input {...props} id={props.name} className='input__field' />
      <span className='input__label'>{props.label}</span>
    </label>
    <InputError {...{ touched, error }} />
  </InputStyled>
);

export default Input;