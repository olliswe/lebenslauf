import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Links } from "./Common";

const DesktopLinkWrapper = styled(Link)`
  padding: 0 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

const NavbarDesktop = () => {
  return (
    <Links>
      <DesktopLinkWrapper to="/dashboard">Dashboard</DesktopLinkWrapper>
      <DesktopLinkWrapper to="/cv">Generate CV</DesktopLinkWrapper>
    </Links>
  );
};

export default NavbarDesktop;
