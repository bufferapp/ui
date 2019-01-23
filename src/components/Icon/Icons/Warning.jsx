import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Warning = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58173 16 0 12.4183 0 8C0 3.58173 3.58173 0 8 0C12.4183 0 16 3.58173 16 8ZM8 3C7.44771 3 7 3.44769 7 4V9C7 9.55231 7.44771 10 8 10C8.55229 10 9 9.55231 9 9V4C9 3.44769 8.55229 3 8 3Z" fill="#0F0B0A" />
    <StyledIcon color={color} d="M7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12Z" fill="white" />
  </Icon>
);

Warning.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Warning.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Warning;
