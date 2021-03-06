import React from "react";
import styled from "styled-components";

import MainContainer from "./MainContainer";
import MenuBar from "../menu/MenuBar";
import Footer from "../footer/Footer";

interface ILayout {
  children: React.ReactChild | React.ReactChild[];
}

const Wrapper = styled.div`
  width: 100%;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom,${theme.colors.secondaryLight},${theme.colors.white})`};
  min-height: 90vh;
  @media (max-width: 500px) {
    margin-top: 3.75rem;
  }
`;

const Paper = styled.div`
  width: 95%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  min-height: 85vh;
  border-radius: 10px;
  @media (max-width: 500px) {
    min-height: 95vh;
  }
  overflow: hidden;
`;

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <MenuBar />
      <Wrapper>
        <MainContainer>
          <Paper>{children}</Paper>
        </MainContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
