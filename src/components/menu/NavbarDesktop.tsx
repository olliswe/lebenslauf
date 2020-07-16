import React from "react";
import styled from "styled-components";

import { Links } from "./Common";

const DesktopLinkWrapper = styled.div`
  padding: 0 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const NavbarDesktop = () => {
  return (
    <Links>
      <DesktopLinkWrapper>Dashboard</DesktopLinkWrapper>
      <DesktopLinkWrapper>Generate CV</DesktopLinkWrapper>
    </Links>
  );
};

export default NavbarDesktop;
