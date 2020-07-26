import styled, { ThemeProps } from "styled-components";

interface IButton {
  outlined: boolean | undefined;
}

const Button = styled.button<IButton & ThemeProps<any>>`
  background-image: ${({ theme, outlined }) =>
    outlined
      ? "none"
      : `linear-gradient(to bottom right,${theme.colors.primary},${theme.colors.primaryLight})`};
  background: ${({ outlined }) => (outlined ? "white" : "")};
  color: ${({ outlined, theme }) =>
    outlined ? theme.colors.primary : "white"};
  display: inline-block;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border: ${({ outlined, theme }) =>
    outlined ? `0.05rem solid ${theme.colors.primary}` : "none"};
  outline: none;
  border-radius: 0.25rem;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: ${({ theme }) => `0px 0px 2px ${theme.colors.primary}`};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => `0px 3px 10px ${theme.colors.primary}`};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => `0px 1px 5px ${theme.colors.primary}`};
  }
`;

export default Button;
