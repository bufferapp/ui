import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const List = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} d="M5.99997 2H14C14.5523 2 15 2.44772 15 3C15 3.55228 14.5523 4 14 4H5.99997V2Z" fill="black" />
    <StyledIcon color={color} d="M0.999969 3C0.999969 2.44772 1.44768 2 1.99997 2H3.99998V4H1.99997C1.44768 4 0.999969 3.55228 0.999969 3Z" fill="black" />
    <StyledIcon color={color} d="M5.99997 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H5.99997V7Z" fill="black" />
    <StyledIcon color={color} d="M0.999969 8C0.999969 7.44772 1.44768 7 1.99997 7H3.99998V9H1.99997C1.44768 9 0.999969 8.55228 0.999969 8Z" fill="black" />
    <StyledIcon color={color} d="M5.99997 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H5.99997V12Z" fill="black" />
    <StyledIcon color={color} d="M0.999969 13C0.999969 12.4477 1.44768 12 1.99997 12H3.99998V14H1.99997C1.44768 14 0.999969 13.5523 0.999969 13Z" fill="black" />

  </Icon>
);

List.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

List.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default List;
