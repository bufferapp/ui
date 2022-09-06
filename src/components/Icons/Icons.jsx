import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as styles from './style';

const StyledIcon = styled.svg`
  ${styles.base};
  ${(props) => styles[props.size]};
  vertical-align: ${(props) =>
    props.verticalAlign ? props.verticalAlign : null};
`;

const Icons = ({ children, ...props }) => (
  <StyledIcon {...props}>
    <title>{props.title}</title>
    {children}
  </StyledIcon>
);

Icons.propTypes = {
  /** The size of the icon. Can be 'small', 'medium', 'large', or 'extraLarge' */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge']),

  /** The `vertical-align` CSS value */
  verticalAlign: PropTypes.string,

  /** The title for better accessibility */
  title: PropTypes.string,
};

Icons.defaultProps = {
  size: 'medium',
  verticalAlign: '',
  title: '',
};

export default Icons;
