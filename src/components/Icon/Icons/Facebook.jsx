import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Facebook = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M15.117 0H0.883047C0.395243 0 0 0.395243 0 0.883047V15.117C0 15.6046 0.395243 16 0.883047 16H8.54607V9.80398H6.46099V7.38924H8.54607V5.60846C8.54607 3.54184 9.8083 2.41654 11.6518 2.41654C12.5349 2.41654 13.2939 2.4823 13.5151 2.51168V4.6714L12.2365 4.672C11.2338 4.672 11.0397 5.14841 11.0397 5.84754V7.38924H13.4309L13.1195 9.80398H11.0397V16H15.117C15.6046 16 16 15.6046 16 15.117V0.883047C16 0.395243 15.6046 0 15.117 0Z" fill="black" />
  </Icon>
);

Facebook.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Facebook.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Facebook;
