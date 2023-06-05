import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as styles from './style'

const StyledIcon = styled.svg`
  ${styles.base};
  ${(props) =>
    // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    styles[props.size]};
  vertical-align: ${(props) =>
    // @ts-expect-error TS(2339) FIXME: Property 'verticalAlign' does not exist on type 'T... Remove this comment to see the full error message
    props.verticalAlign ? props.verticalAlign : null};
`

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
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
