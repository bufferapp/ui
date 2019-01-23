import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Camera = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M0 4C0 3.44769 0.447723 3 1 3H15C15.5523 3 16 3.44769 16 4V14C16 14.5523 15.5523 15 15 15H1C0.447723 15 0 14.5523 0 14V4ZM8 12C9.65686 12 11 10.6569 11 9C11 7.34314 9.65686 6 8 6C6.34314 6 5 7.34314 5 9C5 10.6569 6.34314 12 8 12ZM4 6C4 6.55231 3.55228 7 3 7C2.44772 7 2 6.55231 2 6C2 5.44769 2.44772 5 3 5C3.55228 5 4 5.44769 4 6Z" fill="#0F0B0A" />
    <StyledIcon color={color} d="M3.99997 5C3.99997 2.79086 5.79083 1 7.99997 1C10.2091 1 12 2.79086 12 5H3.99997Z" fill="#0F0B0A" />
  </Icon>
);

Camera.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Camera.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Camera;
