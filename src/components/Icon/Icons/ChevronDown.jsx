import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const ChevronDown = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M7.14645 0.853553C7.46143 0.53857 7.23835 0 6.79289 0L1.20711 0C0.761654 0 0.538571 0.538571 0.853553 0.853553L3.64645 3.64645C3.84171 3.84171 4.15829 3.84171 4.35355 3.64645L7.14645 0.853553Z" fill="#0F0B0A" />
  </Icon>
);

ChevronDown.propTypes = {
  size: PropTypes.oneOf('small', 'medium', 'large'),
  type: PropTypes.oneOf('primary', 'secondary'),
};

ChevronDown.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default ChevronDown;
