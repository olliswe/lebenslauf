import styled from 'styled-components';
import React, { useEffect, useState, useCallback } from 'react';
import NavHeaderDesktop from './NavbarDesktop';
import MenuBarMobile from './NavbarMobile';
import Logo from '../../assets/img/logo.png'


const defaults = {
    navHeight: '5rem',
    smallNavHeight: '3.75rem',
    screenChange: 1096,
};


const NavBarStyled = styled.nav`
  height: ${defaults.smallNavHeight};
  width: 100%;
  background-image: ${({ theme }) => `linear-gradient(to bottom,${theme.colors.secondary},${theme.colors.secondaryLight})`};

  @media (min-width: ${({ theme }) => theme.mediaSizes.phone}) {
    height: ${defaults.navHeight};
  }
`;

const NavBarContent = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: ${({ theme }) => theme.mediaSizes.wide};
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0;

  @media (min-width: ${defaults.screenChange}) {
    padding: 0 5rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSizes.laptop}) {
    padding: 0 0.5rem;
  }
`;

const Img = styled.img`
    height:2rem;
`

const IconLinkWrap = styled.div`
  position: absolute;
  left: 0;
  transform: scale(0.75);
  z-index: 2;
  line-height: 0;

  @media (min-width: ${defaults.screenChange}) {
    left: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSizes.phone}) {
    left: 1.5rem;
    transform: none;
  }

  @media (min-width: ${({ theme }) => theme.mediaSizes.laptop}) {
    left: 2.5rem;
  }
`;

const MenuBar = ()  => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWindowSizeChange = useCallback(() => {
        setWidth(_ => window.innerWidth);
    }, []);
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange, {
            passive: true,
        });
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [handleWindowSizeChange]);


    const isMobile = width < defaults.screenChange;
    const smallNavBar = width < 768;

    return (
        <NavBarStyled>
            <NavBarContent>
                <IconLinkWrap><Img src={Logo}/></IconLinkWrap>
                {isMobile && (
                    <MenuBarMobile
                        smallNavBar={smallNavBar}/>
                )}
                {!isMobile && (
                    <NavHeaderDesktop/>
                )}
            </NavBarContent>
        </NavBarStyled>
    );
};

export default MenuBar;
