import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as styles from './style'

const StyledIcon = styled.svg`
  ${styles.base};
  ${(props) => styles[props.size]};
  vertical-align: ${(props) =>
    props.verticalAlign ? props.verticalAlign : null};
`

const Icon = ({ children, ...props }) => (
  <StyledIcon {...props}>
    <title>{props.title}</title>
    {children}
  </StyledIcon>
)

Icon.propTypes = {
  /** The size of the icon. Can be 'small', 'smedium, 'medium', 'large', or 'extraLarge' */
  size: PropTypes.oneOf(['small', 'smedium', 'medium', 'large', 'extraLarge']),

  /** The `vertical-align` CSS value */
  verticalAlign: PropTypes.string,

  /** The title for better accessibility */
  title: PropTypes.string,
}

Icon.defaultProps = {
  size: 'medium',
  verticalAlign: '',
  title: '',
}

export default Icon
