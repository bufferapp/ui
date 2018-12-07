import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';

const SelectItemStyled = style.li`  
  ${Styles.selectItem};
`;


const SelectItem = ({ item, onClick }) => (
  <SelectItemStyled onClick={onClick} key={item.id}>
    <Styles.selectItemLabel>
      {item.name}
    </Styles.selectItemLabel>
  </SelectItemStyled>
);

SelectItem.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SelectItem;
