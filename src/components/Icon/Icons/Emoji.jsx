import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon, StyledCircle } from './style';

const Emoji = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0C3.58173 0 0 3.58173 0 8C0 12.4183 3.58173 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="black" />
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M12 8.01505C12 8.01005 12 8.00503 12 8.00002C12 7.99501 12 7.98999 12 7.98499V8.01505ZM11.4649 10H4.53513C5.22674 11.1956 6.51943 12 8 12C9.48056 12 10.7732 11.1956 11.4649 10Z" fill="black" />
    <StyledCircle color={color} cx="5" cy="7" r="1" fill="black" />
    <StyledCircle color={color} cx="11" cy="7" r="1" fill="black" />
  </Icon>
);

Emoji.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

Emoji.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default Emoji;
