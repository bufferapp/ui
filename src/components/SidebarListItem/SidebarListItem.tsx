import React from 'react'

import PropTypes from 'prop-types'
import {
  Badge,
  BadgeIconContainer,
  Handle,
  IconContainer,
  ItemStyled,
  LabelContainer,
  LabelStyled,
  NameHandleWrapper,
} from './style'
import Avatar from '../Avatar/Avatar'

const SidebarListItem = ({
  // @ts-expect-error TS(7031) FIXME: Binding element 'title' implicitly has an 'any' ty... Remove this comment to see the full error message
  title,
  // @ts-expect-error TS(7031) FIXME: Binding element 'icon' implicitly has an 'any' typ... Remove this comment to see the full error message
  icon,
  // @ts-expect-error TS(7031) FIXME: Binding element 'onItemClick' implicitly has an 'a... Remove this comment to see the full error message
  onItemClick,
  // @ts-expect-error TS(7031) FIXME: Binding element 'badges' implicitly has an 'any' t... Remove this comment to see the full error message
  badges,
  // @ts-expect-error TS(7031) FIXME: Binding element 'badgeIcon' implicitly has an 'any... Remove this comment to see the full error message
  badgeIcon,
  // @ts-expect-error TS(7031) FIXME: Binding element 'selected' implicitly has an 'any'... Remove this comment to see the full error message
  selected,
  // @ts-expect-error TS(7031) FIXME: Binding element 'user' implicitly has an 'any' typ... Remove this comment to see the full error message
  user,
  // @ts-expect-error TS(7031) FIXME: Binding element 'className' implicitly has an 'any... Remove this comment to see the full error message
  className,
}) => (
  <ItemStyled
    onClick={() => onItemClick()}
    // @ts-expect-error TS(2769) FIXME: No overload matches this call.
    hasUser={user}
    selected={selected}
    className={className}
  >
    {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
    {icon && <IconContainer selected={selected}>{icon}</IconContainer>}
    <LabelContainer>
      {user ? (
        <React.Fragment>
          <Avatar
            src={user.profileImageUrl}
            fallbackUrl={user.fallbackUrl}
            alt={user.name}
            size="small"
            type="social"
            network={user.network}
          />
          <NameHandleWrapper>
            <LabelStyled
              type="label"
              title={title}
              hasUser={user}
              selected={selected}
            >
              {user.name}
            </LabelStyled>
            {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
            <Handle selected={selected}>{user.handle}</Handle>
          </NameHandleWrapper>
        </React.Fragment>
      ) : (
        <LabelStyled type="label" title={title} selected={selected}>
          {title}
        </LabelStyled>
      )}
    </LabelContainer>

    {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
    {!badgeIcon && badges && <Badge selected={selected}>{badges}</Badge>}
    {badgeIcon && (
      // @ts-expect-error TS(2769) FIXME: No overload matches this call.
      <BadgeIconContainer selected={selected}>{badgeIcon}</BadgeIconContainer>
    )}
  </ItemStyled>
)

SidebarListItem.propTypes = {
  /** The id of the element */
  id: PropTypes.string,
  /** The className of the element */
  className: PropTypes.string,
  /** What the label will say */
  title: PropTypes.string.isRequired,
  /** An icon either from this library or a node of your choice */
  icon: PropTypes.node,
  /** A function to perform when the item is clicked */
  onItemClick: PropTypes.func.isRequired,
  /** A string or Node to display at the far right side of the item */
  badges: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
}

SidebarListItem.defaultProps = {
  id: '',
  icon: null,
  badgeIcon: null,
  badges: null,
  selected: null,
  user: null,
  className: null,
}

export default SidebarListItem
