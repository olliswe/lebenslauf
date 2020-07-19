import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: ${({ theme }) =>
    `linear-gradient(to top,${theme.colors.secondary},${theme.colors.secondaryLight})`};
  height: 10rem;
  width: 100%;
  margin-top: 3rem;
  box-shadow: 0px 7.5px 8px 8px rgb(0, 0, 0, 0.5);
`;

const Footer = () => {
  return <Wrapper></Wrapper>;
};

export default Footer;
