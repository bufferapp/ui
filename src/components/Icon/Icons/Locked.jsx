import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Locked = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M3 7C2.44772 7 2 7.44772 2 8V15C2 15.5523 2.44772 16 3 16H13C13.5523 16 14 15.5523 14 15V8C14 7.44772 13.5523 7 13 7H3ZM8 13C8.55229 13 9 12.5523 9 12C9 11.4477 8.55229 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" fill="black" />
    <StyledIcon type={type} d="M4 7V6C4 3.79086 5.79086 2 8 2V2C10.2091 2 12 3.79086 12 6V7" strokeWidth="2" />
  </Icon>
);

Locked.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Locked.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Locked;
