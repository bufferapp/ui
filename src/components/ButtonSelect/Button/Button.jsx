import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as ButtonStyles from '../../Button/style';
import * as ButtonSplitStyles from './style';

const ButtonStyled = style.div`  
  ${ButtonStyles.buttonbase};
  ${ButtonSplitStyles.buttonSplitBase};
  ${props => ButtonStyles[props.size]};
  ${props => ButtonStyles[props.disabled ? 'disabled' : props.type]};
`;

/** Atom component used by the ButtonSplit component to render the right side Select button.
 * On click, this component opens the Select menu popup. */
const Button = ({
  onClick, type, disabled, size,
}) => (
  <ButtonStyled disabled={disabled} type={type} size={size} onClick={onClick}>
    <ButtonSplitStyles.selectButton type={type}>▾</ButtonSplitStyles.selectButton>
  </ButtonStyled>
);

Button.propTypes = {
  /** Function to call on Select Button click to open the menu popup */
  onClick: PropTypes.func.isRequired,

  /** Type of the Select button */
  type: PropTypes.oneOf(['primary', 'secondary']),

  /** Is the button disabled */
  disabled: PropTypes.bool,

  /** Size of the Select button */
  size: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  size: 'medium',
  type: 'secondary',
};

export default Button;
