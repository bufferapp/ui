import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { grayDarker } from '../style/colors';
import BufferLogo from './BufferLogo';
import Select from '../Select';
import NavBarMenu from './NavBarMenu/NavBarMenu';

const NavBarStyled = styled.nav`
  height: 64px;
  width: 100vw;
  background: ${grayDarker};
  display: flex;
  justify-content: space-between;
`;

const NavBar = ({ user, userMenuItems }) => (
  <NavBarStyled>
    <BufferLogo />
    <Select
      horizontalOffset="-16px"
      customButton={handleClick => (<NavBarMenu user={user} onClick={handleClick} />)}
      items={userMenuItems}
    />
  </NavBarStyled>
);

NavBar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  userMenuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    component: PropTypes.node,
    hasDivider: PropTypes.bool,
    onItemClick: PropTypes.func,
  })).isRequired,
};

export default NavBar;
