import React from 'react';

import PropTypes from 'prop-types';
import { ItemStyled, ItemIconWrapper } from './style';
import Text from '../../Text/Text';

const Item = ({ item }) => (
  <ItemStyled onClick={item.onItemClick}>
    <ItemIconWrapper>{item.icon}</ItemIconWrapper>
    <Text type="p">{item.title}</Text>
  </ItemStyled>
);

Item.propTypes = {
  item: PropTypes.string,
};

Item.defaultProps = {
  item: '',
};

export default Item;
