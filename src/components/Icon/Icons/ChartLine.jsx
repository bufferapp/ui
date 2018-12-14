import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const ChartLine = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} d="M1.5 10.5L5.5 6.50001L8.56155 9.56156L14.3187 3.80438" stroke="black" stroke-width="3" stroke-linecap="round" />
  </Icon>
);

ChartLine.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'grayDark', 'gray']),
};

ChartLine.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default ChartLine;
