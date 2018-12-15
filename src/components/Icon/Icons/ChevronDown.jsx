import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { StyledIcon } from './style';

const ChevronDown = ({ color, size, isChevron }) => (
  <Icon color={color} size={size} isChevron={isChevron}>
    <StyledIcon color={color} width="100%" height="100%" fillRule="evenodd" clipRule="evenodd" d="M11.1464 6.85355C11.4614 6.53857 11.2383 6 10.7929 6L5.20711 6C4.76165 6 4.53857 6.53857 4.85355 6.85355L7.64645 9.64645C7.84171 9.84171 8.15829 9.84171 8.35355 9.64645L11.1464 6.85355Z" fill="#0F0B0A" />
  </Icon>
);

ChevronDown.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['white', 'grayDark', 'gray']),
  isChevron: PropTypes.bool,
};

ChevronDown.defaultProps = {
  size: 'medium',
  color: 'grayDark',
  isChevron: undefined,
};


export default ChevronDown;
