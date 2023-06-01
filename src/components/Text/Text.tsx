import React from 'react'

import PropTypes from 'prop-types'
import * as Styles from './style'

// @ts-expect-error TS(7031) FIXME: Binding element 'children' implicitly has an 'any'... Remove this comment to see the full error message
const Text = ({ children, type, ...props }) => {
  switch (type) {
    case 'h1':
      return <Styles.H1 {...props}>{children}</Styles.H1>
    case 'h2':
      return <Styles.H2 {...props}>{children}</Styles.H2>
    case 'h3':
      return <Styles.H3 {...props}>{children}</Styles.H3>
    case 'p':
      return <Styles.Paragraph {...props}>{children}</Styles.Paragraph>
    case 'label':
      return <Styles.Label {...props}>{children}</Styles.Label>
    case 'help':
      return <Styles.Help {...props}>{children}</Styles.Help>
    default:
      return <Styles.Span>{children}</Styles.Span>
  }
}

Text.propTypes = {
  /** The actual text content. */
  children: PropTypes.node,
  /** It changes the color of the text to red. <br><i>This is only used for `help`</i>. */
  hasError: PropTypes.bool,
  /** It's the name of the input it refers to. <br><i>This is only used for `label`.</i> */
  htmlFor: PropTypes.string,
  /** The color can be: `white`, `gray`, `grayDark`, `blue` and `red`.<br><i>Not used for `span` and `help`.</i> */
  color: PropTypes.string,
  /** The type can be: `h1`, `h2`, `h3`, `p`, `label`, `help`. <br><i>If omitted will return a `span`</i> */
  type: PropTypes.string,
  /** If you want to keep all the styling you've applied to a component but just switch out what's being ultimately rendered (be it a different HTML tag or a different custom component), you can use the "as" prop to do this at runtime. */
  as: PropTypes.string,
}

Text.defaultProps = {
  children: undefined,
  hasError: false,
  htmlFor: undefined,
  color: 'grayDarker',
  type: 'span',
}

export default Text
