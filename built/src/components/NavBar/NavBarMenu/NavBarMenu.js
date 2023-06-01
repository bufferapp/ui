import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from '../../Icon';
import { NavBarStyled, NavBarEmail, NavBarName, NavBarUser, NavBarAvatar, NavBarChavron, NavBarImpersonating, } from './style';
export function getUserAvatar(user) {
    if (user.avatar) {
        return user.avatar;
    }
    return 'https://s3.amazonaws.com/buffer-ui/Default+Avatar.png';
}
const NavBarMenu = (props) => {
    const { user, isImpersonation } = props;
    return (React.createElement(NavBarStyled, Object.assign({}, props),
        React.createElement(NavBarUser, null,
            isImpersonation && (React.createElement(NavBarImpersonating, { user: user, "aria-label": "You are impersonating a user" }, "Impersonating")),
            React.createElement(NavBarName, null, user.name),
            React.createElement(NavBarEmail, null, user.email)),
        React.createElement(NavBarAvatar, { avatar: getUserAvatar(user) }),
        React.createElement(NavBarChavron, null,
            React.createElement(ChevronDown, { color: "grayLight", size: "large" }))));
};
NavBarMenu.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    isImpersonation: PropTypes.bool,
};
NavBarMenu.defaultProps = {
    isImpersonation: false,
};
export default NavBarMenu;
//# sourceMappingURL=NavBarMenu.js.map