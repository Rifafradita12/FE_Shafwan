// components/Button.jsx
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: ${({ size, theme }) => theme.button[size || "md"].fontSize};
  padding: ${({ size, theme }) => theme.button[size || "md"].padding};
  background-color: #f04e31;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Button({ children, size = "md", ...props }) {
  return <StyledButton size={size} {...props}>{children}</StyledButton>;
}

export default Button;
