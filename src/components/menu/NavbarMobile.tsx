import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import {
    Links,
} from './Common';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import Title from '../../elements/Title'

const MobileHeader = styled.div`
  position: relative;
`;

const BurgerWrapper = styled.div<{ smallNavBar: boolean }>`
  z-index: 5;
  cursor: pointer;
  user-select: none;
  height: 1.25rem;
  margin: ${({ smallNavBar }) => (smallNavBar ? '0 1.3rem' : '0 1.7rem')};
  text-align: center;
`;

const Burger = styled.input`
  display: none;
  & + label {
    position: relative;
    width: 1.5625rem;
    height: 1.25rem;
    display: inline-block;
    cursor: pointer;
    transition: all 0.5s;
    & div,
    & div:before,
    & div:after {
      background: ${({ theme }) => theme.colors.white};
      position: absolute;
      height: 0.25rem;
      width: 1.5625rem;
      transition: all 0.5s;
    }
    & div:first-child {
      top: 0;
    }
    & div:nth-child(2) {
      top: 0.5rem;
    }
    & div:nth-child(3) {
      top: 1rem;
    }
    & div {
      transition: top 0.2s 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        transform 0.15s;
    }
  }
  &:checked + label {
    & div {
      top: 0.5rem;
      transition: top 0.2s,
        transform 0.15s 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); //0.4s delay before 0.15s rotate trans
    }
    & div:first-child {
      transform: rotate(45deg);
    }
    & div:not(:first-child) {
      transform: rotate(-45deg);
    }
  }
`;

const Styled = styled.div<{ isOpen: boolean }>`
  margin-top: 3.70rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  height: 0;
  background-image: ${({ theme }) =>`linear-gradient(to bottom,${theme.colors.secondaryLight},${theme.colors.white},${theme.colors.white},${theme.colors.white})`};
  transition: height 0.4s ease-in;
  z-index: 1;
  &.open {
    height: 100vh;
    transition: height 0.45s ease-out;
  }
`;

const Content = styled.div`
  opacity: 0;
  margin-bottom:5rem;
  transform: translate(0, 4rem);
  transition: transform 0.9s ease, opacity 0.2s linear;
  &.open {
    opacity: 1;
    transition: transform 0.9s ease-out, opacity 0.2s 0.4s linear;
    transform: translate(0, 0);
  }
`;



const Wrapper = styled.div`
    display:flex;
    height:100%;
    width:100%;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const LinkWrapper = styled.div`
    padding:1rem;
`


const MenuBarMobile= ({smallNavBar}) => {
    const collapseRef = useRef() as React.MutableRefObject<any>;
    const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [blockScroll, allowScroll] = useLockBodyScroll();
    const [burgerOpen, toogleBurger] = useState<boolean | null>(null);

    const onBurgerClick = () => {
        if (burgerOpen) {
            allowScroll();
        } else {
            blockScroll();
        }
        toogleBurger(!burgerOpen);
    };

    return (
        <MobileHeader>
            <Links>
                <BurgerWrapper
                    smallNavBar={!!smallNavBar}
                    data-testid={'mobile-burger'}
                >
                    <Burger
                        checked={!!burgerOpen}
                        type="checkbox"
                        id="burger"
                        onChange={onBurgerClick}
                    />
                    <label htmlFor="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </BurgerWrapper>
            </Links>
            <Styled
                isOpen={!!burgerOpen}
                ref={collapseRef}
                className={burgerOpen ? 'open' : ''}
            >
                <Content ref={contentRef} className={burgerOpen ? 'open' : ''}>
                    <Wrapper>
                        <LinkWrapper>
                            <Title level={1}>DASHBOARD</Title>
                        </LinkWrapper>
                        <LinkWrapper>
                            <Title level={1}>GENERATE CV</Title>
                        </LinkWrapper>
                    </Wrapper>
                </Content>
            </Styled>
        </MobileHeader>
    );
};

export default MenuBarMobile;
