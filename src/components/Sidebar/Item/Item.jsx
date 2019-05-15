import React from 'react';

import PropTypes from 'prop-types';
import { ItemStyled } from './style';

const Item = ({ item }) => <ItemStyled>{item}</ItemStyled>;

Item.propTypes = {
  item: PropTypes.string,
};

Item.defaultProps = {
  item: '',
};

export default Item;
