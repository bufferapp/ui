import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CrossSell from '../CrossSell'

/**
 *
 */
class CrossSellReply extends Component {
  constructor(props) {
    super(props)

    const texts = require(`../../data/${props.product}.json`)

    this.state = {
      texts: {
        ...texts,
        button: {
          ...texts.button,
          url: ''
        }
      }
    }
  }

  render() {
    const { texts } = this.state

    return <CrossSell texts={texts} />
  }
}

CrossSellReply.propTypes = {
  product: PropTypes.string.isRequired,
}

export default CrossSellReply