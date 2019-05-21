import React from 'react';

import PropTypes from 'prop-types';
import { ItemStyled, Badge, NameHandleWrapper } from './style';
import {
  CheckIconWrapper,
  SelectItemCustom,
} from '../../Select/SelectItem/style';
import Text from '../../Text/Text';
import Avatar from '../../Avatar/Avatar';

const Item = ({ item }) => (
  <ItemStyled onClick={() => item.onItemClick(item)}>
    {item.icon && <CheckIconWrapper>{item.icon}</CheckIconWrapper>}
    {item.component && (
      <CheckIconWrapper>
        <SelectItemCustom
          dangerouslySetInnerHTML={{ __html: item.component(item) }}
        />
      </CheckIconWrapper>
    )}
    {item.title && <Text type="label">{item.title}</Text>}
    {item.user && (
      <React.Fragment>
        <Avatar
          src={item.user.profileImageUrl}
          alt={item.user.name}
          size="small"
          type="social"
          network="instagram"
        />
        <NameHandleWrapper>
          <div>{item.user.name}</div>
          <div>{item.user.handle}</div>
        </NameHandleWrapper>
      </React.Fragment>
    )}
    {item.badges && (
      <Badge>
        <Text type="label">{item.badges}</Text>
      </Badge>
    )}
  </ItemStyled>
);

Item.propTypes = {
  item: PropTypes.string,
};

Item.defaultProps = {
  item: '',
};

export default Item;
