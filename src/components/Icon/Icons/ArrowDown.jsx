import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const ArrowDown = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M7.00001 2.99998V6.99998L4.17421 7.00005C3.31987 7.00005 2.85896 8.00218 3.41496 8.65086L7.24074 13.1142C7.63985 13.5799 8.36015 13.5799 8.75926 13.1142L12.585 8.65086C13.1411 8.00218 12.6802 7.00005 11.8258 7.00005L9.00001 6.99998L9.00001 2.99998C9.00001 2.44768 8.55229 1.99998 8.00001 1.99998C7.44774 1.99998 7.00001 2.44768 7.00001 2.99998Z" fill="#0F0B0A" />
  </Icon>
);

ArrowDown.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

ArrowDown.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default ArrowDown;
