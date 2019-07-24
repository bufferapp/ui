import React from 'react';
import PropTypes from 'prop-types';

import {
  ContainerStyled,
  ProgressStyled,
} from './style';

const ProgressBar = ({
  progress,
  fullWidth,
}) => (
  <ContainerStyled fullWidth={fullWidth}>
    <ProgressStyled progress={progress} />
  </ContainerStyled>
);

ProgressBar.propTypes = {
  /** Percentage of progress. */
  progress: PropTypes.string.isRequired,
  /** Is the ProgressBar the full width of the parent container. */
  fullWidth: PropTypes.bool,
};

ProgressBar.defaultProps = {
  fullWidth: false,
};

export default ProgressBar;
