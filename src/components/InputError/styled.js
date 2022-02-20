import styled from 'styled-components';

export const InputErrorStyled = styled.div`
  display: ${props => (props.touched && props.error ? 'block' : 'none')};
  color: #e60c0c;
`;