import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon, StyledRectangle } from './style';

const Link = ({ type, size }) => (
  <Icon type={type} size={size}>
    <g clipPath="url(#clip0)">
      <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M7.46446 5.55023L10.364 2.65073C11.145 1.86968 12.4113 1.86968 13.1924 2.65073C13.9734 3.43178 13.9734 4.69811 13.1924 5.47915L10.2929 8.37865L11.7071 9.79287L14.6066 6.89337C16.1687 5.33127 16.1687 2.79861 14.6066 1.23651C13.0445 -0.325583 10.5118 -0.325583 8.94975 1.23651L6.05025 4.13601L7.46446 5.55023ZM6.05025 6.96444L4.63604 5.55023L1.17157 9.01469C-0.390524 10.5768 -0.390524 13.1094 1.17157 14.6715C2.73367 16.2336 5.26633 16.2336 6.82843 14.6715L10.2929 11.2071L8.87868 9.79287L5.41421 13.2573C4.63316 14.0384 3.36684 14.0384 2.58579 13.2573C1.80474 12.4763 1.80474 11.21 2.58579 10.4289L6.05025 6.96444Z" fill="black" />
      <StyledRectangle type={type} x="5" y="12.4" width="2" height="10" rx="1" transform="rotate(-135 5 12.4)" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" transform="translate(0 0.0649414)" />
      </clipPath>
    </defs>
  </Icon>
);

Link.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Link.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Link;
