import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const ArrowLeft = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M8.99999 4.17423C8.99999 3.31986 7.99789 2.85893 7.34921 3.41496L2.8858 7.24076C2.42019 7.63987 2.42019 8.36021 2.8858 8.75932L7.34921 12.5851C7.99789 13.141 8.99999 12.6802 8.99999 11.8258L8.99999 8.99992H13C13.5523 8.99992 14 8.55222 14 7.99992C14 7.44761 13.5523 6.99992 13 6.99992H8.99999L8.99999 4.17423Z" fill="#0F0B0A" />
  </Icon>
);

ArrowLeft.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

ArrowLeft.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default ArrowLeft;
