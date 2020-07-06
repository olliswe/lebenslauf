import React from 'react';
import MainContainer from "./MainContainer";
import MenuBar from "../menu/MenuBar";
import styled from "styled-components";
import {theme} from "../../configs/theme";

interface ILayout {
    children: React.ReactChild | React.ReactChild[];
}

const Wrapper = styled.div`
  width: 100%;
  background-image: ${({ theme }) => `linear-gradient(to bottom,${theme.colors.secondaryLight},${theme.colors.white})`};
  min-height:90vh;
`;

const Paper = styled.div`
    width:85%;
    background:${({ theme }) => theme.colors.white};
    padding:4rem;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
    min-height:65vh;
`


const Layout: React.FC<ILayout> = ({children}) => {
    return (
        <>
        <MenuBar/>
        <Wrapper>
            <MainContainer>
                <Paper>
                    {children}
                </Paper>
            </MainContainer>
        </Wrapper>
        </>
    );
};

export default Layout;
