import React from 'react'
import PropTypes from 'prop-types'

// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'high... Remove this comment to see the full error message
import hljs from 'highlight.js/lib/core'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'high... Remove this comment to see the full error message
import javascript from 'highlight.js/lib/languages/javascript'

/** Component that shows the highlighted example code */
export default class CodeExample extends React.Component {
  componentDidMount() {
    hljs.registerLanguage('javascript', javascript)
    // @ts-expect-error TS(2339) FIXME: Property 'element' does not exist on type 'CodeExa... Remove this comment to see the full error message
    hljs.highlightBlock(this.element)
  }

  render() {
    const { children } = this.props
    return (
      <pre
        ref={(ref) => {
          // @ts-expect-error TS(2339) FIXME: Property 'element' does not exist on type 'CodeExa... Remove this comment to see the full error message
          this.element = ref
        }}
      >
        <code>{children}</code>
      </pre>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
}
