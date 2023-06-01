import React from 'react'
import PropTypes from 'prop-types'

import { ContainerStyled, ProgressStyled } from './style'

const ProgressBar = ({ progress, className }) => (
  <ContainerStyled className={className}>
    <ProgressStyled progress={progress} />
  </ContainerStyled>
)

ProgressBar.propTypes = {
  /** Percentage of progress. */
  progress: PropTypes.string.isRequired,
  /** Class passed by the DOM element. */
  className: PropTypes.string,
}

ProgressBar.defaultProps = {
  className: undefined,
}

export default ProgressBar
