import React, { useState } from 'react';
import styled from 'styled-components';
import NavItems from '../NavItems/NavItems';

import Hamburger from './Hamburger/Hamburger';
import Logo from '../../Logo/Logo';

const FixedWrapper = styled.div`
  position: fixed;
  background-color: var(--color-main);
  padding: 0rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Menu = styled.div`
  width: 100%;
  background-color: var(--color-mainDark);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  transform: translateY(${props => (props.opened ? '0%' : '-100%')});
  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  display: none;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const SideDrawer = ({ loggedIn }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <FixedWrapper>
        <Wrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>
      <Menu opened={isOpened}>
        <NavItems
          loggedIn={loggedIn}
          mobile
          clicked={() => setIsOpened(false)}
        />
      </Menu>
    </>
  );
};

export default SideDrawer;
