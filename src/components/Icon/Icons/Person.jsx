import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Person = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M7.95954 8C9.59404 8 10.9191 6.65685 10.9191 5C10.9191 3.34315 9.59404 2 7.95954 2C6.32503 2 5 3.34315 5 5C5 6.65685 6.32503 8 7.95954 8Z" fill="black" />
    <StyledIcon color={color} d="M2.06924 13.6538C2.61044 10.9478 4.98638 9 7.74594 9H8.25406C11.0136 9 13.3896 10.9478 13.9308 13.6538C13.9666 13.8329 13.8296 14 13.6469 14H2.35308C2.17042 14 2.03342 13.8329 2.06924 13.6538Z" fill="black" />
  </Icon>
);

Person.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'grayDark', 'gray']),
};

Person.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Person;
