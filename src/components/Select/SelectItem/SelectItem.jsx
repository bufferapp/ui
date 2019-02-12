import React from 'react';
import PropTypes from 'prop-types';
import { Flag } from '../../Icon';
import {
  SelectItemStyled, SelectItemLabel, SelectItemIcon, SelectItemTitle,
} from './style';

const SelectItem = ({
  item, onClick, hovered, keyMap, hasSelectedItems, getItemId,
}) => (
  <SelectItemStyled onClick={item.onItemClick || onClick} hovered={hovered} id={getItemId(item)}>
    <SelectItemLabel>
      {item.selected && <Flag color="gray" />}
      <SelectItemIcon hovered={hovered}>
        {item.component}
      </SelectItemIcon>
      <SelectItemTitle moveRight={hasSelectedItems && !item.selected}>
        {item[keyMap ? keyMap.title : 'title']}
      </SelectItemTitle>
    </SelectItemLabel>
  </SelectItemStyled>
);

SelectItem.propTypes = {
  /** Item to render */
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onItemClick: PropTypes.func,
  }).isRequired,

  /** On click function */
  onClick: PropTypes.func.isRequired,

  /** Get the id of the item */
  getItemId: PropTypes.func.isRequired,

  /** Is the item selected */
  hovered: PropTypes.bool,

  /** Custom keys to used in the Items array */
  keyMap: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),

  /** Does the Select have selected items to adjust the margin */
  hasSelectedItems: PropTypes.bool,
};

SelectItem.defaultProps = {
  hovered: undefined,
  keyMap: undefined,
  hasSelectedItems: undefined,
};

export default SelectItem;
