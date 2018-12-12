import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';

const IconStyled = style.svg`  
  ${Styles.base};
  ${props => Styles[props.size]};
  ${props => Styles[props.type]};
  ${props => Styles[props.isChevron ? 'chevron' : null]};
`;

const GroupStyled = style.g`  
  ${props => Styles[`${props.type}Group`]};
`;


const Icon = ({
  children, size, type, isChevron,
}) => (
  <IconStyled
    size={size}
    type={type}
    isChevron={isChevron}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <GroupStyled type={type}>
      {children}
    </GroupStyled>
  </IconStyled>

);

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  isChevron: PropTypes.bool,
};

Icon.defaultProps = {
  size: 'medium',
  type: 'secondary',
  isChevron: undefined,
};

export default Icon;
