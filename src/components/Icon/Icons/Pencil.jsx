import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Pencil = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} d="M14.1423 0.837097C13.7518 0.446594 13.1186 0.446594 12.7281 0.837097L12.021 1.54422L14.1423 3.66553L14.8494 2.95844C15.2399 2.5679 15.2399 1.93475 14.8494 1.54422L14.1423 0.837097Z" fill="black" />
    <StyledIcon color={color} d="M11.3139 2.25128L13.4352 4.37259L4.94997 12.8579L2.56874 14.0485C2.30165 14.182 1.97911 14.1297 1.76796 13.9185C1.55684 13.7074 1.50447 13.3849 1.63801 13.1178L2.82863 10.7366L11.3139 2.25128Z" fill="black" />
  </Icon>
);

Pencil.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'grayDark', 'gray']),
};

Pencil.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Pencil;
