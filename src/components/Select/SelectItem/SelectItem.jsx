import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectItemStyled, SelectItemLabel, SelectItemIcon, SelectItemTitle,
} from './style';
import Flag from '../../Icon/Icons/Flag';

const SelectItem = ({
  item, onClick, hovered, keyMap, hasSelectedItems,
}) => (
  <SelectItemStyled onClick={item.onItemClick || onClick} hovered={hovered}>
    <SelectItemLabel>
      {item.selected && <Flag color="gray" />}
      <SelectItemIcon>
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
