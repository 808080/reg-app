import React from 'react';
import { ButtonStyled } from './styled';

const Button = (props) => (
  <ButtonStyled>
    <button {...props} className='btn'>{props.content}</button>
  </ButtonStyled>
);

export default Button;