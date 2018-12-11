import React from 'react';
import Icon from '../Icon';
import { StyledIcon } from './style';

const RefreshIcon = ({ type, size }) => (
  <Icon color={type} size={size}>
    <StyledIcon type={type} d="M7 0C3.134 0 0 3.134 0 7C0 10.866 3.134 14 7 14H8C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12H7C4.23859 12 2 9.76141 2 7C2 4.23859 4.23859 2 7 2C9.76141 2 12 4.23859 12 7H10.2071C9.76166 7 9.53857 7.53857 9.85355 7.85355L12.6465 10.6465C12.8417 10.8417 13.1583 10.8417 13.3535 10.6465L16.1465 7.85355C16.4614 7.53857 16.2383 7 15.7929 7H14C14 3.134 10.866 0 7 0Z" fill="#0F0B0A" />
  </Icon>
);

RefreshIcon.propTypes = {
  ...Icon.propTypes,
};

export default RefreshIcon;
