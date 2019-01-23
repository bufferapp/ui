import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Folder = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M2.5 6L2.1405 3.12403C2.0659 2.52718 2.53128 2 3.13278 2H5.89922C6.93545 2 7.94084 2.35267 8.75 3C9.55916 3.64733 10.5645 4 11.6008 4H12.7192C13.3698 4 13.8472 4.61139 13.6894 5.24254L13.5 6H2.5ZM0 7L0.781009 13.2481C0.906116 14.2489 1.75692 15 2.76556 15H13.2344C14.2431 15 15.0939 14.2489 15.219 13.2481L16 7H0Z" fill="black" />
  </Icon>
);

Folder.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Folder.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Folder;
