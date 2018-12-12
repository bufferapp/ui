import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon, StyledRectangle } from './style';

const Pause = ({ type, size }) => (
  <Icon type={type} size={size}>
    <g clipPath="url(#clip0)">
      <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 5.5C5 4.94772 5.44772 4.5 6 4.5C6.55228 4.5 7 4.94772 7 5.5V10.5C7 11.0523 6.55228 11.5 6 11.5C5.44772 11.5 5 11.0523 5 10.5V5.5ZM10 4.5C9.44771 4.5 9 4.94772 9 5.5V10.5C9 11.0523 9.44771 11.5 10 11.5C10.5523 11.5 11 11.0523 11 10.5V5.5C11 4.94772 10.5523 4.5 10 4.5Z" fill="#0F0B0A" />
    </g>
    <defs>
      <clipPath id="clip0">
        <StyledRectangle type={type} width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

Pause.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Pause.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Pause;
