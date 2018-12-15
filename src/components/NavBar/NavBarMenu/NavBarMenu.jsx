import React from 'react';
import PropTypes from 'prop-types';
import {
  NavBarStyled, NavBarEmail, NavBarName, NavBarUser, NavBarAvatar, NavBarChavron,
} from './style';
import ChevronDown from '../../Icon/Icons/ChevronDown';

const NavBarMenu = ({ user, onClick }) => (
  <NavBarStyled>
    <NavBarUser>
      <NavBarName>{user.name}</NavBarName>
      <NavBarEmail>{user.email}</NavBarEmail>
    </NavBarUser>
    <NavBarAvatar onClick={onClick} />
    <NavBarChavron onClick={onClick}>
      <ChevronDown color="grayLight" size="large" />
    </NavBarChavron>
  </NavBarStyled>
);

NavBarMenu.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavBarMenu;
