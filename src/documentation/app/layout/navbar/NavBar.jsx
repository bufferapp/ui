import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  flex: 0;
  z-index: 999;
  background: #3d3d3d;
  border-bottom: 1px solid #d4dadf;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  height: 65px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  width: 167px;
  height: 64px;
  margin: 0px;
  padding: 0px;
  background: transparent url('./images/logo.png') no-repeat top left;
  background-size: 100%;
  text-indent: -9999em;
  overflow: hidden;
`;

const Version = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 1rem 0 0;
`;

/** Top Navigation */
const NavBar = ({ title, version }) => (
  <Container>
    <Logo>
      {title}
    </Logo>
    <Version>
      v.
      {version}
    </Version>
  </Container>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default NavBar;
