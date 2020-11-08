import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Links } from "./Common";
import useLogout from "../../hooks/useLogout";
import useMeStore from "../../stores/useMeStore";
import useAuthState, { AuthStates } from "../../stores/useAuthState";

const NavbarItem = styled.div`
  padding: 0 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const DesktopLinkWrapper = styled(Link)`
  padding: 0 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

const AuthNavBar = () => {
  const logout = useLogout();
  const user = useMeStore((state) => state.user);

  const handleLogout = (e: any) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      {user && <NavbarItem>Hi {user.username}!</NavbarItem>}
      <DesktopLinkWrapper to="/dashboard">Dashboard</DesktopLinkWrapper>
      <DesktopLinkWrapper to="/cv">Generate CV</DesktopLinkWrapper>
      <DesktopLinkWrapper to="/" onClick={handleLogout}>
        Logout
      </DesktopLinkWrapper>
    </>
  );
};

const NavbarDesktop = () => {
  const authState = useAuthState((state) => state.authState);

  return (
    <Links>
      {authState === AuthStates.authenticated ? <AuthNavBar /> : <></>}
    </Links>
  );
};

export default NavbarDesktop;
