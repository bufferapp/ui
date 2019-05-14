import React from 'react';
import md5 from 'blueimp-md5';
import PropTypes from 'prop-types';
import { ChevronDown } from '../../Icon';
import {
  NavBarStyled, NavBarEmail, NavBarName, NavBarUser, NavBarAvatar, NavBarChavron,
} from './style';

export function getUserAvatar(user) {
  if (user.avatar) {
    return user.avatar
  }

  return `https://www.gravatar.com/avatar/${md5(user.email)}?d=https%3A%2F%2Fs3.amazonaws.com%2Fbuffer-ui%2FDefault%2BAvatar.png`;
}

/** NavBar Menu component used by the Select component to show a custom User name and avatar
 *  button */
const NavBarMenu = ({ user, onClick }) => (
  <NavBarStyled onClick={onClick}>
    <NavBarUser>
      <NavBarName>{user.name}</NavBarName>
      <NavBarEmail>{user.email}</NavBarEmail>
    </NavBarUser>
    <NavBarAvatar avatar={getUserAvatar(user)} onClick={onClick} />
    <NavBarChavron>
      <ChevronDown color="grayLight" size="large" />
    </NavBarChavron>
  </NavBarStyled>
);

NavBarMenu.propTypes = {
  /** User Name and Email to be shown in the NavBar */
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,

  /** OnClick function to be called on Avatar click, passed by the Select component */
  onClick: PropTypes.func.isRequired,
};

export default NavBarMenu;
