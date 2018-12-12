import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const GooglePlus = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} d="M5.07824 7.08452V9.10123C5.07824 9.10123 7.0287 9.0973 7.82536 9.0973C7.39367 10.4025 6.72652 11.114 5.07824 11.114C3.41035 11.114 2.11136 9.76167 2.11136 8.09091C2.11136 6.42015 3.41428 5.06781 5.07824 5.06781C5.96125 5.06781 6.53029 5.37838 7.05224 5.81081C7.47216 5.39017 7.43684 5.3312 8.50037 4.32482C7.59774 3.50319 6.39686 3 5.08217 3C2.27618 3 0 5.2801 0 8.09091C0 10.9017 2.27618 13.1818 5.08217 13.1818C9.27741 13.1818 10.3017 9.52187 9.96027 7.08452C8.96738 7.08452 5.07824 7.08452 5.07824 7.08452ZM14.2379 7.1828V5.41769H12.9821V7.1828H11.1729V8.44079H12.9821V10.2531H14.2379V8.44079H16V7.1828H14.2379Z" fill="black" />
  </Icon>
);

GooglePlus.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

GooglePlus.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default GooglePlus;
