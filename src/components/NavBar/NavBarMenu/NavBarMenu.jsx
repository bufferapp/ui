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
const NavBarMenu = props => {
  const { user, isImpersonation } = props;

  return (
    <NavBarStyled {...props}>
      <NavBarUser>
        {isImpersonation && (
          <NavBarImpersonating
            user={user}
            aria-label="You are impersonating a user"
          >
            Impersonating
          </NavBarImpersonating>
        )}
        <NavBarName>{user.name}</NavBarName>
        <NavBarEmail>{user.email}</NavBarEmail>
      </NavBarUser>
      <NavBarAvatar avatar={getUserAvatar(user)} />
      <NavBarChavron>
        <ChevronDown color="grayLight" size="large" />
      </NavBarChavron>
    </NavBarStyled>
  );
};

NavBarMenu.propTypes = {
  /** User Name and Email to be shown in the NavBar */
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  isImpersonation: PropTypes.bool,
};

NavBarMenu.defaultProps = {
  isImpersonation: false
};

export default NavBarMenu;
