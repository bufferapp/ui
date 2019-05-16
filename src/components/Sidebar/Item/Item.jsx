import React from 'react';

import PropTypes from 'prop-types';
import { ItemStyled } from './style';
import Text from '../../Text/Text';

const Item = ({ item }) => (
  <ItemStyled>
    <Text type="p">{item}</Text>
  </ItemStyled>
);

Item.propTypes = {
  item: PropTypes.string,
};

Item.defaultProps = {
  item: '',
};

export default Item;
