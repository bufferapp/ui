import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import Clipboard from 'react-clipboard.js';

const ColorWrapper = style(Clipboard)`
  background: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  flex-direction: ${props => (props.width === '33%' ? 'column' : 'row')};
  justify-content: space-between;
  cursor: pointer;
`;

const ColorName = style.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding:  ${props => (props.width === '100%' ? '50px 0px 0px 20px' : '0px 0px 0px 20px')};
`;

const ColorValue = style.span`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding-left: ${props => (props.width === '100%' ? '20px' : '0px')};
`;

/** Displays color and copies the color to clipboard on click */
const ColorCopy = ({
  color, name, width, height,
}) => (
  <ColorWrapper color={color} width={width} height={height} data-clipboard-text={color}>
    <ColorName>{name}</ColorName>
    <ColorValue>{color}</ColorValue>
  </ColorWrapper>
);

ColorCopy.defaultProps = {
  width: '100%',
  height: '100px',
};

ColorCopy.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ColorCopy;
