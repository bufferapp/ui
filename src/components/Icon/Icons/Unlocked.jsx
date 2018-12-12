import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Unlocked = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M3 7C2.44772 7 2 7.44772 2 8V15C2 15.5523 2.44772 16 3 16H13C13.5523 16 14 15.5523 14 15V8C14 7.44772 13.5523 7 13 7H3ZM8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" fill="black" />
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M5 6C5 4.34315 6.34315 3 8 3C8.94149 3 9.78168 3.43369 10.3317 4.1122L12 3H12.0004C11.0882 1.78555 9.63582 1 8 1C5.23858 1 3 3.23858 3 6V7H5V6Z" fill="black" />
  </Icon>
);

Unlocked.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Unlocked.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Unlocked;
