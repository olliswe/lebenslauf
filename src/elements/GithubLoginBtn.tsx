import React from "react";
import styled from "styled-components";
import githubImg from "../assets/img/github.png";

const StyledLink = styled.a`
  min-width: 20rem;
  padding: 0.75rem;
  text-align: center;
  border-radius: 10px;
  background-color: black;
  color: white;
  appearance: none;
  text-decoration: none;
  &:hover,
  &:visited {
    color: white;
  }
  position: relative;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  }
`;

const StyledImg = styled.img`
  height: 2rem;
  position: absolute;
  left: 1.8rem;
  top: 0.5rem;
`;

const GithubLoginBtn: React.FC<{ href: string }> = ({ href }) => {
  return (
    <StyledLink href={href}>
      <StyledImg src={githubImg} />
      Login with GitHub
    </StyledLink>
  );
};

export default GithubLoginBtn;
