import styled, { css } from 'styled-components'
import {
  blue,
  blueLightest,
  boxShadow,
  gray,
  grayDark,
  grayLight,
  transparent,
} from '../../style/colors'
import { borderRadius } from '../../style/borders'
import { fontSize, fontWeightMedium } from '../../style/fonts'

// @ts-expect-error TS(7006) FIXME: Parameter 'iconPosition' implicitly has an 'any' t... Remove this comment to see the full error message
const getGridTemplateAreas = (iconPosition) => {
  switch (iconPosition) {
    case 'top':
      return `
        "icon"
        "label"
      `

    case 'bottom':
      return `
        "label"
        "icon"
      `

    case 'right':
      return `"label icon"`

    case 'left':
    default:
      return `"icon label"`
  }
}

export const OptionStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${borderRadius};
  margin-right: 4px;
  transition: all 0.1s ease-out;

  border: ${(props) => {
    if (props.selected) return `1px solid ${blueLightest}`
    if (props.selected) return `1px solid ${gray}`
    return `1px solid ${transparent}`
  }};

  color: ${(props) => {
    if (props.selected) return blue
    if (props.disabled) return gray
    return grayDark
  }};

  background-color: ${(props) => {
    if (props.selected) return blueLightest
    if (props.disabled) return grayLight
  }};

  padding: ${(props) => {
    if (props.size === 'large') return '11px'
    if (props.size === 'small') return '3px 7px'
    return '7px'
  }};

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    !props.disabled &&
    css`
      :hover {
        color: ${blue};
      }

      :active {
        background-color: ${blueLightest};
      }

      :focus {
        outline: none;
        border: 1px solid ${blue};
        box-shadow: 0 0 0 1px ${boxShadow};
      }
    `}
`

export const ContentWrapper = styled.div`
  display: grid;
  place-items: center;
  // Calculate grid-template-rows value based on provided iconPosition
  grid-template-areas: ${(props) => getGridTemplateAreas(props.iconPosition)};
  // if horizontal icon position, two columns one row
  grid-template-columns: ${(props) =>
    ['left', 'right'].includes(props.iconPosition) ? 'auto auto' : 'auto'};
  // if vertical icon position, one column two rows
  grid-template-rows: ${(props) =>
    ['top', 'bottom'].includes(props.iconPosition) ? 'auto' : 'auto auto'};
`

export const IconWrapper = styled.div`
  display: flex;
  grid-area: icon;
`

export const Label = styled.span`
  font-weight: ${fontWeightMedium};
  font-size: ${fontSize};
  grid-area: label;
  ${(props) =>
    props.optionType === 'textAndIcon' && `margin-${props.iconPosition}: 10px`};
`
