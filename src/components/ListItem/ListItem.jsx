import React from 'react';

import PropTypes from 'prop-types';
import {
  ItemStyled,
  Badge,
  NameHandleWrapper,
  Handle,
  LabelContainer,
} from './style';
import { CheckIconWrapper } from '../Select/SelectItem/style';
import Text from '../Text/Text';
import Avatar from '../Avatar/Avatar';

const Item = ({ title, icon, onItemClick, badges, selected, user }) => (
  <ItemStyled
    onClick={() => onItemClick()}
    hasUser={user}
    isSelected={selected}
  >
    {icon && <CheckIconWrapper>{icon}</CheckIconWrapper>}
    <LabelContainer>
      {user ? (
        <React.Fragment>
          <Avatar
            src={user.profileImageUrl}
            alt={user.name}
            size="small"
            type="social"
            network="instagram"
          />
          <NameHandleWrapper>
            <Text
              type="label"
              title={title}
              color={selected ? 'white' : undefined}
            >
              {user.name}
            </Text>
            <Handle isSelected={selected}>{user.handle}</Handle>
          </NameHandleWrapper>
        </React.Fragment>
      ) : (
        <Text type="label" title={title} color={selected ? 'white' : undefined}>
          {title}
        </Text>
      )}
    </LabelContainer>

    {badges && <Badge isSelected={selected}>{badges}</Badge>}
  </ItemStyled>
);

Item.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onItemClick: PropTypes.func.isRequired,
  badges: PropTypes.number,
  selected: PropTypes.bool,
  user: PropTypes.shape({}),
};

Item.defaultProps = {
  id: '',
  icon: null,
  badges: null,
  selected: false,
  user: null,
};

export default Item;
