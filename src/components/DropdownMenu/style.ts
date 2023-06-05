import styled, { css } from 'styled-components'
import {
  blue,
  white,
  gray,
  grayDefault,
  boxShadow,
  grayLight,
  grayDarker,
} from '../style/colors'
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeightMedium,
} from '../style/fonts'
import { borderRadius } from '../style/borders'
import { ORG_SWITCHER } from '../NavBar/NavBar'

export const DropdownItems = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;

  &[role='menubar'] > li {
    display: flex;
    position: relative;

    & [role='menuitem']:focus {
      outline: ${(props) => (props.usingMouse ? 'none' : `1px solid ${blue}`)};
      outline-offset: -1px;
    }
  }
`

export const Item = styled.li`
  font-family: ${fontFamily};
  font-weight: ${fontWeightMedium};
  font-size: 14px;
  line-height: 16px;
  position: ${(props) => (props.type === ORG_SWITCHER ? 'relative' : '')};
  min-height: 32px;
  align-items: center;
  color: ${(props) => (props.disabled ? grayLight : gray)};
  cursor: pointer;
  display: flex;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  background-color: transparent;
  padding: ${(props) => (props.menuOption ? 0 : '0 8px')};
  margin: ${(props) => {
    const { type } = props
    return type === 'header' ? '0 0 5px 5px' : ''
  }};
`

export const ItemDividerTitle = styled.span`
  position: relative;
  top: -11px;
  margin-left: 8px;
  background: white;
  padding: 0 8px;
  font-size: 12px;
  font-family: ${fontFamily};
  color: ${gray};
`

const buttonBase = css`
  -webkit-appearance: none;
  align-items: center;
  background-color: ${white};
  border: 0;
  border-radius: ${borderRadius};
  color: ${grayDefault};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  flex: 0 0 auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeightMedium};
  line-height: ${lineHeight};
  min-width: 0;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  transition-property: background-color, border-color, color;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  user-select: none;
  :active {
    top: 1px;
  }
  :focus {
    box-shadow: 0 0 0 3px ${boxShadow};
  }
  :hover {
    transition-property: background-color, border-color, color;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
`

const medium = css`
  padding-right: 16px;
  padding-left: 16px;
  height: 40px;
`

const disabled = css`
  background-color: ${grayLight};
  cursor: not-allowed;
`

// @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
const getColor = (props, type, defaultColor) => {
  if (props.colors && props.colors[type]) {
    return props.colors[type]
  }
  return defaultColor
}

export const ButtonItemStyled = styled.button`
  ${buttonBase};
  ${medium};
  color: ${(props) => getColor(props, 'title', grayDarker)};
  background: none transparent;
  border-radius: 0;
  justify-content: flex-start;
  border-radius: 4px;
  height: 32px;
  width: 100%;
  padding: 0px 8px;
  margin: 0;
  :focus {
    box-shadow: none;
  }
  :hover {
    background-color: ${grayLight};
    svg {
      fill: ${(props) => getColor(props, 'iconHover', grayDarker)};
    }
  }
  ${(props) => (props.disabled ? disabled : '')};
`

export const ButtonLabel = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: ${(props) => {
    const { hasIcon, type } = props
    if (type === ORG_SWITCHER) {
      return hasIcon ? '5px' : '21px'
    }
    return hasIcon ? '5px' : '0px'
  }};
  margin-right: ${(props) => (props.hasIcon ? '5px' : '0px')};
`
