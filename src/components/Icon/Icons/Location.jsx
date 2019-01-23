import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon, StyledCircle } from './style';

const Location = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} d="M14 6C14 9.31371 11 12 8 16C5 12 2 9.31371 2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6Z" fill="black" />
    <StyledCircle color={color} cx="8" cy="6" r="3" fill="white" />
  </Icon>
);

Location.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Location.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Location;
