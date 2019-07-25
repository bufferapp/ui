import React from 'react';
import PropTypes from 'prop-types';

import {
  ContainerStyled,
  ProgressStyled,
} from './style';

const ProgressBar = ({
  progress,
}) => (
  <ContainerStyled>
    <ProgressStyled progress={progress} />
  </ContainerStyled>
);

ProgressBar.propTypes = {
  /** Percentage of progress. */
  progress: PropTypes.string.isRequired,
};

export default ProgressBar;
