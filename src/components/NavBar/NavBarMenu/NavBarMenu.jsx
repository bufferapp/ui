import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from '../../Icon';
import {
  NavBarStyled, NavBarEmail, NavBarName, NavBarUser, NavBarAvatar, NavBarChavron,
} from './style';

/** NavBar Menu component used by the Select component to show a custom User name and avatar
 *  button */
const NavBarMenu = ({ user, onClick }) => {
  const { name, email, avatar, menuItems } = user;

  return (
    <NavBarStyled>
      <NavBarUser>
        {name && <NavBarName>{name}</NavBarName>}
        <NavBarEmail>{email}</NavBarEmail>
      </NavBarUser>
      {avatar && <NavBarAvatar avatar={user.avatar} onClick={onClick} />}
      {menuItems.length > 0 && (
        <NavBarChavron onClick={onClick}>
          <ChevronDown color="grayLight" size="large" />
        </NavBarChavron>
      )}
    </NavBarStyled>
  )
};

NavBarMenu.propTypes = {
  /** User Name and Email to be shown in the NavBar */
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    menuItems: PropTypes.array
  }).isRequired,

  /** OnClick function to be called on Avatar click, passed by the Select component */
  onClick: PropTypes.func.isRequired,
};

export default NavBarMenu;
