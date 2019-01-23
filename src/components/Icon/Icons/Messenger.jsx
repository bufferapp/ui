import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Messenger = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58171 0 0 3.31639 0 7.40741C0 9.73852 1.16333 11.8178 2.98137 13.1757V16L5.70529 14.505C6.43225 14.7062 7.20238 14.8148 8 14.8148C12.4183 14.8148 16 11.4984 16 7.40741C16 3.31639 12.4183 0 8 0ZM8.79504 9.97535L6.75778 7.80251L2.78262 9.97535L7.15529 5.33337L9.24225 7.50621L13.1677 5.33337L8.79504 9.97535Z" fill="black" />
  </Icon>
);

Messenger.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Messenger.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Messenger;
