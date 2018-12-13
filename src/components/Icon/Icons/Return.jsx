import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const Return = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} d="M8.00183 4.00282C8.00113 3.14479 9.01028 2.68434 9.65787 3.2472L14.1448 7.14729C14.6087 7.55049 14.6024 8.27284 14.1317 8.66798L9.65125 12.4287C9.00089 12.9746 8.00906 12.5127 8.00833 11.6636L8.00183 4.00282Z" fill="black" />
    <StyledIcon type={type} d="M4 4.80024C4 4.24794 3.55228 3.80024 3 3.80024C2.44772 3.80024 2 4.24794 2 4.80024V5.1822C2 6.55262 2.77426 7.80543 4 8.41828C4.50238 8.66944 5.05637 8.80024 5.61804 8.80024H8V6.80024H5.61804C5.36685 6.80024 5.11911 6.74177 4.89444 6.62941C4.34625 6.35536 4 5.79505 4 5.1822V4.80024Z" fill="black" />
  </Icon>
);

Return.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Return.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default Return;
