import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Tag = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M14 1H8.41421C8.14899 1 7.89465 1.10535 7.70709 1.29291L0.707092 8.29291C0.316589 8.68341 0.316589 9.31659 0.707092 9.70709L6.29291 15.2929C6.68341 15.6834 7.31659 15.6834 7.70709 15.2929L14.7071 8.29291C14.8947 8.10535 15 7.85101 15 7.58578V2C15 1.44772 14.5523 1 14 1ZM11.5 6C12.3284 6 13 5.32843 13 4.5C13 3.67157 12.3284 3 11.5 3C10.6716 3 10 3.67157 10 4.5C10 5.32843 10.6716 6 11.5 6Z" fill="black" />
  </Icon>
);

Tag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Tag.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Tag;
