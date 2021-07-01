import React from 'react'
import PropTypes from 'prop-types';

import Icon from '../../Icon/Icon';
import { Label, OptionStyled, OptionWrapper } from './style';

const Option = (props) => {
  const { disabled, icon, label } = props
  return (
    <OptionWrapper>
      <OptionStyled
        disabled={disabled}
      >
        {typeof icon === 'string' ? (
          <Icon title={icon} />
        ) : (
          {icon}
        )}
        {label && (<Label>{label}</Label>)}
      </OptionStyled>
    </OptionWrapper>
  )
}

Option.propTypes = {
  /** It disables the option. </i> */
  disabled: PropTypes.bool,
  /** The title of the icon to pass to the Icon component */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** The option label */
  label: PropTypes.string,
}

Option.defaultProps = {
  disabled: false,
  icon: null,
  label: '',
}

export default Option
