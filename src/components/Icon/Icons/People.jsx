import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const People = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M11.4805 9C12.8426 9 13.9468 7.88071 13.9468 6.5C13.9468 5.11929 12.8426 4 11.4805 4C10.1184 4 9.01425 5.11929 9.01425 6.5C9.01425 7.88071 10.1184 9 11.4805 9Z" fill="black" />
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M4.57494 8C6.20944 8 7.53447 6.65685 7.53447 5C7.53447 3.34315 6.20944 2 4.57494 2C2.94043 2 1.6154 3.34315 1.6154 5C1.6154 6.65685 2.94043 8 4.57494 8Z" fill="black" />
    <StyledIcon type={type} d="M6.54797 14C6.56063 11.8377 8.31708 10.0915 10.4794 10.0915L11 10.0915L11.0591 10.0915C13.3886 10.0915 15.4192 11.6769 15.9842 13.9369C15.9922 13.969 15.968 14 15.935 14H6.54797Z" fill="black" />
    <StyledIcon type={type} d="M0.161219 13.1939C0.648934 10.7553 2.79009 9 5.27696 9H5.49401C8.25543 9 10.494 11.2386 10.494 14H0.0747563C0.0360819 14 0.0070764 13.9646 0.0146611 13.9267L0.161219 13.1939Z" fill="black" />
  </Icon>
);

People.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

People.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default People;
