import React from 'react'
import PropTypes from 'prop-types'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

/** Component that shows the highlighted example code */
export default class CodeExample extends React.Component {
  componentDidMount() {
    hljs.registerLanguage('javascript', javascript)
    hljs.highlightBlock(this.element)
  }

  render() {
    const { children } = this.props
    return (
      <pre
        ref={(ref) => {
          this.element = ref
        }}
      >
        <code>{children}</code>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
}
