import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const LinkedIn = ({ type, size }) => (
  <Icon type={type} size={size}>
    <StyledIcon type={type} fillRule="evenodd" clipRule="evenodd" d="M13.6338 13.6341H11.2623V9.92089C11.2623 9.035 11.2461 7.89611 10.0292 7.89611C8.79421 7.89611 8.6051 8.86078 8.6051 9.85678V13.6341H6.23369V5.99844H8.51022V7.04167H8.54177C8.85843 6.44144 9.63253 5.80844 10.7871 5.80844C13.1902 5.80844 13.6338 7.38989 13.6338 9.44578V13.6341ZM3.55928 4.95467C2.79863 4.95467 2.18297 4.33789 2.18297 3.57833C2.18297 2.81933 2.79863 2.20278 3.55928 2.20278C4.31794 2.20278 4.93449 2.81933 4.93449 3.57833C4.93449 4.33789 4.31794 4.95467 3.55928 4.95467ZM2.37219 13.6341H4.74538V5.99844H2.37219V13.6341ZM14.8157 0H1.18098C0.529437 0 0 0.516444 0 1.15322V14.8454C0 15.4828 0.529437 16 1.18098 16H14.8157C15.4683 16 16 15.4828 16 14.8454V1.15322C16 0.516444 15.4683 0 14.8157 0Z" fill="black" />
  </Icon>
);

LinkedIn.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

LinkedIn.defaultProps = {
  size: 'medium',
  type: 'secondary',
};


export default LinkedIn;
