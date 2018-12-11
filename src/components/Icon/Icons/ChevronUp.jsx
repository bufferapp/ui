import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const ChevronUp = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M7.14645 3.14645C7.46143 3.46143 7.23835 4 6.79289 4L1.20711 4C0.761654 4 0.538571 3.46143 0.853553 3.14645L3.64645 0.353553C3.84171 0.158291 4.15829 0.158291 4.35355 0.353553L7.14645 3.14645Z" fill="#0F0B0A" />
  </Icon>
);

ChevronUp.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

ChevronUp.defaultProps = {
  size: 'medium',
  type: 'secondary',
};

export default ChevronUp;
