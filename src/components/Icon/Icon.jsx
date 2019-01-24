import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';

const IconStyled = styled.svg`  
  ${Styles.base};
  ${props => Styles[props.size]};
  ${props => Styles[props.isChevron ? 'chevron' : null]};
`;

const GroupStyled = styled.g`  
  ${props => Styles[`${props.color}Group`]};
`;

/** Main Icon component that renders the passed svg */
const Icon = ({
  children, ...props
}) => (
  <IconStyled
    {...props}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <GroupStyled {...props}>
      {children}
    </GroupStyled>
  </IconStyled>

);

Icon.propTypes = {
  /** svg to render in the Icon */
  children: PropTypes.node.isRequired,
};

export default Icon;
