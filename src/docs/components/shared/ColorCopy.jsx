import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

const ColorWrapper = style.div`
  background: ${props => props.color};
  width: ${props => props.width};
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const ColorName = style.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 50px 0px 0px 20px;
`;

const ColorValue = style.span`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;
`;

const ColorCopy = ({ color, name, width }) => (
  <ColorWrapper color={color} width={width}>
    <ColorName>{name}</ColorName>
    <ColorValue>{color}</ColorValue>
  </ColorWrapper>
);

ColorCopy.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default ColorCopy;
