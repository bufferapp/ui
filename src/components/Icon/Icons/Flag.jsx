import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Flag = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M4 1H2V15H4V1ZM5 10V2H14L12.2807 5.56567C12.1484 5.84012 12.1484 6.15988 12.2807 6.43433L14 10H5Z" fill="black" />
  </Icon>
);

Flag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'grayDark', 'gray']),
};

Flag.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Flag;
