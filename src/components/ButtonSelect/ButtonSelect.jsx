import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { ButtonWrapper } from './style';

/** Split Button component composed out of the Button and Select components.
 * The left side is the normal Button and the right side is the Select component that opens the menu popup on click. */
const ButtonSelect = ({
  onButtonClick, label, type, onSelectClick, items,
}) => (
  <ButtonWrapper>
    <Button isSplit onClick={onButtonClick} label={label} type={type}>{label}</Button>
    <Select isSplit type={type} onSelectClick={onSelectClick} items={items} />
  </ButtonWrapper>
);

ButtonSelect.propTypes = {
  /** Function to call when the left side, the Button is clicked */
  onButtonClick: PropTypes.func.isRequired,

  /** Label to show on the left Button side */
  label: PropTypes.string.isRequired,

  /** Type of the Button, Primary of Secondary */
  type: PropTypes.oneOf(['primary', 'secondary']),

  /** Function to call when the Select menu item is clicked */
  onSelectClick: PropTypes.func.isRequired,

  /** Items to show in the Select menu popup */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

ButtonSelect.defaultProps = {
  type: 'secondary',
};

export default ButtonSelect;
