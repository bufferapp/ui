import React from 'react';

import PropTypes from 'prop-types';
import { ItemStyled, Badge, NameHandleWrapper, Handle } from './style';
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
    {item.user ? (
      <React.Fragment>
        <Avatar
          src={item.user.profileImageUrl}
          alt={item.user.name}
          size="small"
          type="social"
          network="instagram"
        />
        <NameHandleWrapper>
          <Text type="label">{item.user.name}</Text>
          <Handle>{item.user.handle}</Handle>
        </NameHandleWrapper>
      </React.Fragment>
    ) : (
      <Text type="label">{item.title}</Text>
    )}

    {item.badges && <Badge>{item.badges}</Badge>}
  </ItemStyled>
);

Item.propTypes = {
  item: PropTypes.string,
};

Item.defaultProps = {
  item: '',
};

export default Item;
