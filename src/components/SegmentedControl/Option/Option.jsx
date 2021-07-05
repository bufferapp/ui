import React from 'react'
import PropTypes from 'prop-types';

import { Label, OptionStyled } from './style';

const Option = (props) => {
  const {
    selected,
    disabled,
    icon,
    label,
    value,
    optionType,
    size,
    onClick,
  } = props
  const hasIcon = optionType === 'icon' || 'textAndIcon';

  const handleClick = () => {
    if (!disabled) onClick(value);
  }

  return (
    <OptionStyled
      selected={selected}
      disabled={disabled}
      size={size}
      onClick={handleClick}
    >
      {hasIcon && (icon)}
      {label && (<Label optionType={optionType}>{label}</Label>)}
    </OptionStyled>
  )
}

Option.propTypes = {
  /** Whether the option is the selected one */
  selected: PropTypes.bool.isRequired,
  /** It disables the option. </i> */
  disabled: PropTypes.bool,
  /** The title of the icon to pass to the Icon component */
  icon: PropTypes.node,
  /** The option label */
  label: PropTypes.string,
  /** The option value */
  value: PropTypes.string.isRequired,
  /** Type of options. Options: text, icon, textAndIcon. */
  optionType: PropTypes.oneOf(['text', 'icon', 'textAndIcon']).isRequired,
  /** Size of control. Options: small, normal, large. */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** onClick callback function */
  onClick: PropTypes.func,
}

Option.defaultProps = {
  disabled: false,
  icon: null,
  label: '',
  size: 'normal',
  onClick: () => null,
}

export default Option
