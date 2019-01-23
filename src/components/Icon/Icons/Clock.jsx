import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Clock = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M17 8C17 12.4183 13.4182 16 8.99997 16C4.5817 16 0.999969 12.4183 0.999969 8C0.999969 3.58173 4.5817 0 8.99997 0C13.4182 0 17 3.58173 17 8ZM11.7071 9.29291L9.99997 7.58582V3.5C9.99997 2.94769 9.55225 2.5 8.99997 2.5C8.44769 2.5 7.99997 2.94769 7.99997 3.5V8.41425L10.2929 10.7071C10.6834 11.0977 11.3166 11.0977 11.7071 10.7071C12.0976 10.3166 12.0976 9.68341 11.7071 9.29291Z" fill="#0F0B0A" />
  </Icon>
);

Clock.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Clock.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Clock;
