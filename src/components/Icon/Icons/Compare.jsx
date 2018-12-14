import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Compare = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M6.99998 3C6.99998 2.44772 7.4477 2 7.99998 2C8.55226 2 8.99998 2.44772 8.99998 3L9.00001 5.35419V10.6458L8.99998 13C8.99998 13.5523 8.55226 14 7.99998 14C7.4477 14 6.99998 13.5523 6.99998 13V3ZM16 8C16 10.2091 14.2091 12 12 12C11.6547 12 11.3196 11.9563 11 11.874V4.12601C11.3196 4.04373 11.6547 4 12 4C14.2091 4 16 5.79086 16 8ZM5.00001 12V4L0.956248 10.47C0.539958 11.136 1.01881 12 1.80424 12H5.00001Z" fill="black" />
  </Icon>
);

Compare.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'grayDark', 'gray']),
};

Compare.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Compare;
