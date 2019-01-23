import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Sidebar = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M2 2C1.44772 2 1 2.44769 1 3V13C1 13.5523 1.44772 14 2 14H4C4.55228 14 5 13.5523 5 13V3C5 2.44769 4.55228 2 4 2H2ZM8 2C7.44772 2 7 2.44769 7 3V13C7 13.5523 7.44772 14 8 14H14C14.5523 14 15 13.5523 15 13V3C15 2.44769 14.5523 2 14 2H8Z" fill="#0F0B0A" />
  </Icon>
);

Sidebar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Sidebar.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Sidebar;
