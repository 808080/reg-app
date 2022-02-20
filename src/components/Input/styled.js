import styled from 'styled-components';
import { C_PRIMARY_DARK } from '../../styles/constants';

export const InputStyled = styled.div`
  position: relative;
  z-index: 2;
  margin-bottom: 10px;

  .input__label {
    position: absolute;
    left: 0;
    top: 0;
    transition: .2s;
    color: ${C_PRIMARY_DARK};
    font-size: 12px;
    z-index: -1;
  }

  .input__field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    border-bottom: solid 1px ${C_PRIMARY_DARK};
    padding-bottom: 3px;
    margin-top: 16px;
    margin-bottom: 6px;
    font-size: 18px;

    &[value=""]:not(input:focus) {
      & + .input__label {
        font-size: 18px;
        top: 15px;
      }
    }
  }
`;