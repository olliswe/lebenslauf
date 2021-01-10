import styled, { css } from "styled-components";

const CtaButton = styled.button<{ isDisabled?: boolean }>`
  background-image: ${({ theme, isDisabled }) =>
    isDisabled
      ? `linear-gradient(to bottom right,${theme.colors.greyVarD8},${theme.colors.primaryLight})`
      : `linear-gradient(to bottom right,${theme.colors.primary},${theme.colors.primaryLight})`};
  color: white;
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 7rem;
  transition: all 0.2s;
  cursor: ${({ isDisabled }) => (isDisabled ? "unset" : "pointer")};
  box-shadow: ${({ theme, isDisabled }) =>
    isDisabled
      ? `0px 0px 5px ${theme.colors.primaryLight}`
      : `0px 0px 5px ${theme.colors.primary}`};

  ${({ isDisabled }) => (isDisabled ? "" : hoverCss)}
`;

const hoverCss = css`
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => `0px 5px 20px ${theme.colors.primary}`};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => `0px 2px 10px ${theme.colors.primary}`};
  }
`;

export default CtaButton;
