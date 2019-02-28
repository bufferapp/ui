import React from 'react';
import PropTypes from 'prop-types';
import { Checkmark } from '../../Icon';
import {
  SelectItemStyled,
  SelectItemLabel,
  SelectItemIcon,
  SelectItemTitle,
  SelectItemCustom,
} from './style';

const SelectItem = ({
  item,
  onClick,
  hovered,
  keyMap,
  hasSelectedItems,
  getItemId,
}) => (
  <SelectItemStyled
    onClick={item.onItemClick || onClick}
    hovered={hovered}
    id={getItemId(item)}
  >
    <SelectItemLabel>
      {item.selected && <Checkmark color="gray" />}
      {item.icon && (
        <SelectItemIcon hovered={hovered}>{item.icon}</SelectItemIcon>
      )}
      {item.component && (
        <SelectItemCustom dangerouslySetInnerHTML={{ __html: item.component(item) }} />
      )}
      <SelectItemTitle moveRight={hasSelectedItems && !item.selected}>
        {item[keyMap ? keyMap.title : 'title']}
      </SelectItemTitle>
    </SelectItemLabel>
  </SelectItemStyled>
);

SelectItem.propTypes = {
  /** Item to render */
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    selected: PropTypes.bool,
    icon: PropTypes.node,
  }).isRequired,

  /** On click function */
  onClick: PropTypes.func,

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
  onClick: undefined
};

export default SelectItem;
