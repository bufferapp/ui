import React from 'react';

import PropTypes from 'prop-types';
import {
  ItemStyled,
  Badge,
  NameHandleWrapper,
  Handle,
  LabelContainer,
  IconContainer,
  BadgeIconContainer,
} from './style';
import Text from '../Text/Text';
import Avatar from '../Avatar/Avatar';

const SidebarListItem = ({
  title,
  icon,
  onItemClick,
  badges,
  badgeIcon,
  selected,
  user,
}) => (
  <ItemStyled onClick={() => onItemClick()} hasUser={user} selected={selected}>
    {icon && <IconContainer selected={selected}>{icon}</IconContainer>}
    <LabelContainer>
      {user ? (
        <React.Fragment>
          <Avatar
            src={user.profileImageUrl}
            alt={user.name}
            size="small"
            type="social"
            network={user.network}
          />
          <NameHandleWrapper>
            <Text
              type="label"
              title={title}
              color={selected ? 'white' : undefined}
            >
              {user.name}
            </Text>
            <Handle selected={selected}>{user.handle}</Handle>
          </NameHandleWrapper>
        </React.Fragment>
      ) : (
        <Text type="label" title={title} color={selected ? 'white' : undefined}>
          {title}
        </Text>
      )}
    </LabelContainer>

    {!badgeIcon && badges && <Badge selected={selected}>{badges}</Badge>}
    {badgeIcon && <BadgeIconContainer selected={selected}>{badgeIcon}</BadgeIconContainer>}
  </ItemStyled>
);

SidebarListItem.propTypes = {
  /** The id of the element */
  id: PropTypes.string,
  /** What the label will say */
  title: PropTypes.string.isRequired,
  /** An icon either from this library or a node of your choice */
  icon: PropTypes.node,
  /** A function to perform when the item is clicked */
  onItemClick: PropTypes.func.isRequired,
  /** A number to display at the far right side of the item */
  badges: PropTypes.number,
  /** An icon either from this library or a node of your choice */
  badgeIcon: PropTypes.node,
  /** Whether the item is currently selected */
  selected: PropTypes.bool,
  /** A user object if you'd like the item to display the user Avatar, social network and handle */
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    handle: PropTypes.string,
    profileImageUrl: PropTypes.string,
    network: PropTypes.oneOf(['facebook', 'twitter', 'instagram', 'linkedin', 'google', 'pinterest']),
  }),
};

SidebarListItem.defaultProps = {
  id: '',
  icon: null,
  badgeIcon: null,
  badges: null,
  selected: null,
  user: null,
};

export default SidebarListItem;
