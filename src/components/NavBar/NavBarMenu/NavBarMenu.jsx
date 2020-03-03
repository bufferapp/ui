import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from '../../Icon';
import {
  NavBarStyled,
  NavBarEmail,
  NavBarName,
  NavBarUser,
  NavBarAvatar,
  NavBarChavron,
  NavBarImpersonating,
} from './style';

export function getUserAvatar(user) {
  if (user.avatar) {
    return user.avatar;
  }

  return 'https://s3.amazonaws.com/buffer-ui/Default+Avatar.png';
}

/** NavBar Menu component used by the Select component to show a custom User name and avatar
 *  button */
const NavBarMenu = ({ user, onClick, isImpersonation }) => (
  <NavBarStyled onClick={onClick} isImpersonation={isImpersonation}>
    <NavBarUser>
      {isImpersonation && (
        <NavBarImpersonating user={user}>Impersonating</NavBarImpersonating>
      )}
      <NavBarName isImpersonation={isImpersonation}>{user.name}</NavBarName>
      <NavBarEmail isImpersonation={isImpersonation}>{user.email}</NavBarEmail>
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
  isImpersonation: PropTypes.bool,
};

NavBarMenu.defaultProps = {
  isImpersonation: false
};

export default NavBarMenu;
