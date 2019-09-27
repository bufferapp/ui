import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as styles from './style';

const StyledIcon = styled.svg`
  ${styles.base};
  ${props => styles[props.size]};
  vertical-align: ${props =>
    props.verticalAlign ? props.verticalAlign : null};
`;

const Icon = ({ children, ...props }) => (
  <StyledIcon {...props}>{children}</StyledIcon>
);

Icon.propTypes = {
  /** The size of the icon. Can be 'small', 'medium', 'large', or 'extraLarge' */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge']),

  /** The `vertical-align` CSS value */
  verticalAlign: PropTypes.string,
};

Icon.defaultProps = {
  size: 'medium',
  verticalAlign: '',
};

export default Icon;
