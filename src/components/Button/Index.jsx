import styled, { css } from 'styled-components';

const colors = {
  primary: "#4361ee",
  secondary: "#b5179e",
};

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ variant }) => colors[variant] || colors["primary"]};

  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
