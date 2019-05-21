import React from 'react';

import PropTypes from 'prop-types';
import { ItemStyled } from './style';
import {
  CheckIconWrapper,
  SelectItemCustom,
} from '../../Select/SelectItem/style';
import Text from '../../Text/Text';

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
    <Text type="label" color="#FFFFFF">
      {item.title}
    </Text>
  </ItemStyled>
);

Item.propTypes = {
  item: PropTypes.string,
};

Item.defaultProps = {
  item: '',
};

export default Item;
