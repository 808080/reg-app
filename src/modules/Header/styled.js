import styled from 'styled-components';
import {
  BORDER,
  C_PRIMARY_DARK,
  C_PRIMARY
} from '../../styles/constants';

export const HeaderStyled = styled.header`
	.nav {
		display: flex;
    border-bottom: ${BORDER};

    &__link {
      padding: 15px;
      flex: 1 100%;
      text-align: center;
      color: ${C_PRIMARY_DARK};
      font-weight: 600;
      text-decoration: none;
      transition: 0.3s;
      border: none;
      background-color: initial;
      font-size: 16px;
      font-family: sans-serif;
      cursor: pointer;
      & + .nav__link {
        border-left: ${BORDER};
      }
      &--active,
      :hover {
        color: #fff;
      }
      &--active {
        background-color: ${C_PRIMARY};
      }
      :hover {
        background-color: ${C_PRIMARY_DARK};
      }
    }

	}
`;