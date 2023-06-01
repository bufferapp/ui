import React from 'react'
import PropTypes from 'prop-types'

import { ContainerStyled, ProgressStyled } from './style'

// @ts-expect-error TS(7031) FIXME: Binding element 'progress' implicitly has an 'any'... Remove this comment to see the full error message
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
