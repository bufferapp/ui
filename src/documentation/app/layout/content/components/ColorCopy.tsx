import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Clipboard from 'react-clipboard.js'

const ColorWrapper = styled(Clipboard)`
  background: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => (props.width === '33%' ? 'column' : 'row')};
  justify-content: space-between;
  cursor: pointer;
  border: 0;
  transition: 0.05s ease-out all;
  outline: none;
  &:focus {
    transform: scale(1.2);
  }
`

const ColorName = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: ${(props) =>
    props.width === '100%' ? '50px 0px 0px 20px' : '0px 0px 0px 20px'};
`

const ColorValue = styled.span`
  color: #ffffff;
  font-size: 14px;
  margin-right: 16px;
  font-weight: 500;
  padding-left: ${(props) => (props.width === '100%' ? '20px' : '0px')};
`

/** Displays color and copies the color to clipboard on click */
// @ts-expect-error TS(7031) FIXME: Binding element 'color' implicitly has an 'any' ty... Remove this comment to see the full error message
const ColorCopy = ({ color, name, width, height }) => (
  <ColorWrapper
    color={color}
    width={width}
    height={height}
    data-clipboard-text={color}
  >
    <ColorName>{name}</ColorName>
    <ColorValue>{color.toUpperCase()}</ColorValue>
  </ColorWrapper>
)

ColorCopy.defaultProps = {
  width: '100%',
  height: '100px',
}

ColorCopy.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default ColorCopy
