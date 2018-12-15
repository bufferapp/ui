import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';

const IconStyled = style.svg`  
  ${Styles.base};
  ${props => Styles[props.size]};
  ${props => Styles[props.isChevron ? 'chevron' : null]};
`;

const GroupStyled = style.g`  
  ${props => Styles[`${props.color}Group`]};
`;


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
  children: PropTypes.node.isRequired,
};

export default Icon;
