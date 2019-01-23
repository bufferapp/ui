import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const ArrowRight = ({ color, size }) => (
  <Icon color={color} size={size}>
    <StyledIcon color={color} fillRule="evenodd" clipRule="evenodd" d="M6.99996 4.19664C6.99996 3.33861 8.00951 2.87901 8.65661 3.44243L13.1403 7.3463C13.6038 7.74992 13.5969 8.47221 13.1258 8.86699L8.6422 12.6239C7.99139 13.1692 6.99996 12.7065 6.99996 11.8574L6.99993 8.99998L2.99993 8.99998C2.44766 8.99998 1.99993 8.55229 1.99993 7.99998C1.99993 7.44768 2.44766 6.99998 2.99993 6.99998H6.99993L6.99996 4.19664Z" fill="#0F0B0A" />
  </Icon>
);

ArrowRight.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

ArrowRight.defaultProps = {
  size: 'medium',
  color: 'grayDark',
};


export default ArrowRight;
