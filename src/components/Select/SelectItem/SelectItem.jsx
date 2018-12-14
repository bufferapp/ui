import React from 'react';
import PropTypes from 'prop-types';
import { SelectItemStyled, SelectItemLabel, SelectItemIcon } from './style';

const SelectItem = ({
  item, onClick, selected, ...props
}) => (
  <SelectItemStyled onClick={onClick} selected={selected} {...props}>
    <SelectItemLabel>
      <SelectItemIcon>
        {item.component}
      </SelectItemIcon>
      {item.title}
    </SelectItemLabel>
  </SelectItemStyled>
);

SelectItem.propTypes = {
  /** Item to render */
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,

  /** On click function */
  onClick: PropTypes.func.isRequired,

  /** Is the item selected */
  selected: PropTypes.bool,
};

SelectItem.defaultProps = {
  selected: undefined,
};

export default SelectItem;
