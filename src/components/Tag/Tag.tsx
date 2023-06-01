import React from 'react'
import PropTypes from 'prop-types'
import * as Styles from './style'

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const Tag = ({ children, ...props }) => (
  <Styles.Tag {...props}>{children}</Styles.Tag>
)

Tag.propTypes = {
  /** The actual content of the tag. */
  children: PropTypes.node.isRequired,
  /** The color of the tag. */
  color: PropTypes.string,
  /** The color of the text. It can be: `white`, `gray`, `grayDark`, `blue` and `red`. */
  textColor: PropTypes.string,
}

Tag.defaultProps = {
  color: 'green',
  textColor: 'white',
}

export default Tag
