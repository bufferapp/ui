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
  cursor: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Themed... Remove this comment to see the full error message
disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${borderRadius};
  margin-right: 4px;
  transition: all 0.1s ease-out;

  border: ${(props): string => {
    // @ts-expect-error TS(2339) FIXME: Property 'selected' does not exist on type 'Themed... Remove this comment to see the full error message
    if (props.selected) return `1px solid ${blueLightest}`
    // @ts-expect-error TS(2339) FIXME: Property 'selected' does not exist on type 'Themed... Remove this comment to see the full error message
    if (props.selected) return `1px solid ${gray}`
    return `1px solid ${transparent}`
  }};

  color: ${(props): string => {
    // @ts-expect-error TS(2339) FIXME: Property 'selected' does not exist on type 'Themed... Remove this comment to see the full error message
    if (props.selected) return blue
    // @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Themed... Remove this comment to see the full error message
    if (props.disabled) return gray
    return grayDark
  }};

  background-color: ${(props):  
// @ts-expect-error TS(2366) FIXME: Function lacks ending return statement and return ... Remove this comment to see the full error message
 string => {
    // @ts-expect-error TS(2339) FIXME: Property 'selected' does not exist on type 'Themed... Remove this comment to see the full error message
    if (props.selected) return blueLightest
    // @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Themed... Remove this comment to see the full error message
    if (props.disabled) return grayLight
  }};

  padding: ${(props): string => {
    // @ts-expect-error TS(2339) FIXME: Property 'size' does not exist on type 'ThemedStyl... Remove this comment to see the full error message
    if (props.size === 'large') return '11px'
    // @ts-expect-error TS(2339) FIXME: Property 'size' does not exist on type 'ThemedStyl... Remove this comment to see the full error message
    if (props.size === 'small') return '3px 7px'
    return '7px'
  }};

  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    // @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Themed... Remove this comment to see the full error message
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
  grid-template-areas: ${(props): string =>
    // @ts-expect-error TS(2339) FIXME: Property 'iconPosition' does not exist on type 'Th... Remove this comment to see the full error message
    getGridTemplateAreas(props.iconPosition)};
  // if horizontal icon position, two columns one row
  grid-template-columns: ${(props) =>
    // @ts-expect-error TS(2339) FIXME: Property 'iconPosition' does not exist on type 'Th... Remove this comment to see the full error message
    ['left', 'right'].includes(props.iconPosition) ? 'auto auto' : 'auto'};
  // if vertical icon position, one column two rows
  grid-template-rows: ${(props) =>
    // @ts-expect-error TS(2339) FIXME: Property 'iconPosition' does not exist on type 'Th... Remove this comment to see the full error message
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
    // @ts-expect-error TS(2339) FIXME: Property 'optionType' does not exist on type 'Them... Remove this comment to see the full error message
    props.optionType === 'textAndIcon' && `margin-${props.iconPosition}: 10px`};
`
