import styled from "styled-components";

const CtaButton = styled.button`
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right,${theme.colors.primary},${theme.colors.primaryLight})`};
  color: white;
  display: inline-block;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border: none;
  outline: none;
  border-radius: 7rem;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: ${({ theme }) => `0px 0px 5px ${theme.colors.primary}`};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => `0px 5px 20px ${theme.colors.primary}`};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => `0px 2px 10px ${theme.colors.primary}`};
  }
`;

export default CtaButton;
