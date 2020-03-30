import React from 'react';
import styled from 'styled-components';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import NavBar from '../../components/Navigation/Navbar/Navbar';
import { connect } from 'react-redux';

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, loggedIn }) => (
  <>
    <NavBar loggedIn={loggedIn} />
    <SideDrawer loggedIn={loggedIn} />
    <MainWrapper>{children}</MainWrapper>
  </>
);

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth
});

export default connect(mapStateToProps)(Layout);
