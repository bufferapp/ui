import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Plus = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M7.99999 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 7.99999 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 7.99999 16Z" fill="#0F0B0A" />
    <rect x="7" y="3" width="2" height="10" rx="0.999999" fill="white" />
    <path d="M6 7V9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H6Z" fill="white" />
    <path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H8V7L12 7Z" fill="white" />
  </Icon>
);

Plus.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Plus.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Plus;
