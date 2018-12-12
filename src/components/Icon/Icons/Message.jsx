import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Message = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} d="M1 3C1 2.44772 1.44772 2 2 2H14C14.5523 2 15 2.44772 15 3V10C15 10.5523 14.5524 11 14.0001 11C10.64 11 6.90857 11 6 11C5.25351 11 3.11393 12.6717 1.86908 13.5193C1.41258 13.8302 1 13.5523 1 13V3Z" fill="black" />
  </Icon>
);

Message.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Message.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Message;
