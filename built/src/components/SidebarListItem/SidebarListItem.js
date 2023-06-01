import React from 'react';
import PropTypes from 'prop-types';
import { Badge, BadgeIconContainer, Handle, IconContainer, ItemStyled, LabelContainer, LabelStyled, NameHandleWrapper, } from './style';
import Avatar from '../Avatar/Avatar';
const SidebarListItem = ({ title, icon, onItemClick, badges, badgeIcon, selected, user, className, }) => (React.createElement(ItemStyled, { onClick: () => onItemClick(), hasUser: user, selected: selected, className: className },
    icon && React.createElement(IconContainer, { selected: selected }, icon),
    React.createElement(LabelContainer, null, user ? (React.createElement(React.Fragment, null,
        React.createElement(Avatar, { src: user.profileImageUrl, fallbackUrl: user.fallbackUrl, alt: user.name, size: "small", type: "social", network: user.network }),
        React.createElement(NameHandleWrapper, null,
            React.createElement(LabelStyled, { type: "label", title: title, hasUser: user, selected: selected }, user.name),
            React.createElement(Handle, { selected: selected }, user.handle)))) : (React.createElement(LabelStyled, { type: "label", title: title, selected: selected }, title))),
    !badgeIcon && badges && React.createElement(Badge, { selected: selected }, badges),
    badgeIcon && (React.createElement(BadgeIconContainer, { selected: selected }, badgeIcon))));
SidebarListItem.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onItemClick: PropTypes.func.isRequired,
    badges: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    badgeIcon: PropTypes.node,
    selected: PropTypes.bool,
    user: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        handle: PropTypes.string,
        profileImageUrl: PropTypes.string,
        fallbackUrl: PropTypes.string,
        network: PropTypes.oneOf([
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'google',
            'pinterest',
            'tiktok',
            'googlebusiness',
            'startPage',
            'mastodon',
            'youtube',
        ]),
    }),
};
SidebarListItem.defaultProps = {
    id: '',
    icon: null,
    badgeIcon: null,
    badges: null,
    selected: null,
    user: null,
    className: null,
};
export default SidebarListItem;
//# sourceMappingURL=SidebarListItem.js.map