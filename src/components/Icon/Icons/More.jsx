import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const More = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M10.0001 2C10.0001 3.10455 9.10461 4 8.00006 4C6.89548 4 6.00006 3.10455 6.00006 2C6.00006 0.895447 6.89548 0 8.00006 0C9.10461 0 10.0001 0.895447 10.0001 2ZM8.00006 10C9.10461 10 10.0001 9.10455 10.0001 8C10.0001 6.89545 9.10461 6 8.00006 6C6.89548 6 6.00006 6.89545 6.00006 8C6.00006 9.10455 6.89548 10 8.00006 10ZM8.00006 16C9.10461 16 10.0001 15.1046 10.0001 14C10.0001 12.8954 9.10461 12 8.00006 12C6.89548 12 6.00006 12.8954 6.00006 14C6.00006 15.1046 6.89548 16 8.00006 16Z" fill="black" />
  </Icon>
);

More.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'grayDark', 'gray']),
};

More.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default More;
