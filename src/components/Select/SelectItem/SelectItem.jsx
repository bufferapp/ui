import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';

const SelectItemStyled = style.li`  
  ${Styles.selectItem};
`;


const SelectItem = ({ item, onClick, selected }) => (
  <SelectItemStyled onClick={onClick} selected={selected}>
    <Styles.selectItemLabel>
      {item.title}
    </Styles.selectItemLabel>
  </SelectItemStyled>
);

SelectItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

SelectItem.defaultProps = {
  selected: undefined,
};

export default SelectItem;
