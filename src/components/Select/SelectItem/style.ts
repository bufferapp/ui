/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import { grayDarker, gray, grayLight } from '../../style/colors'
import { fontFamily, fontWeightMedium, fontSize } from '../../style/fonts'

export const SelectItemStyled = styled.li`
  min-height: 32px;
  align-items: center;
  color: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Themed... Remove this comment to see the full error message
disabled ? grayLight : grayDarker)};
  cursor: pointer;
  display: flex;
  font-size: ${fontSize};
  font-family: ${fontFamily};
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: ${(props): string =>
    // @ts-expect-error TS(2339) FIXME: Property 'hovered' does not exist on type 'ThemedS... Remove this comment to see the full error message
    props.hovered ? grayLight : 'transparent'};
  &:hover {
    background-color: ${grayLight};
  }
  pointer-events: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type 'Themed... Remove this comment to see the full error message
disabled ? 'none' : 'auto')};
`

export const SelectItemLabel = styled.div`
  font-size: ${fontSize};
  font-weight: ${fontWeightMedium};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: ${(props): string =>
    // @ts-expect-error TS(2339) FIXME: Property 'capitalizeItemLabel' does not exist on t... Remove this comment to see the full error message
    props.capitalizeItemLabel ? 'capitalize' : ''};
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const SelectItemIcon = styled.div`
  display: flex;
  padding-right: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'iconEnd' does not exist on type 'ThemedS... Remove this comment to see the full error message
iconEnd ? '0px' : '8px')};
  fill: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'hovered' does not exist on type 'ThemedS... Remove this comment to see the full error message
hovered ? grayDarker : gray)};
`

export const SelectItemTitle = styled.p`
  margin: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'moveRight' does not exist on type 'Theme... Remove this comment to see the full error message
moveRight ? '0px 0px 0px 24px' : '0px')};
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`

export const SelectItemCustom = styled.span`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.span`
  margin-right: 8px;
  height: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'custom' does not exist on type 'ThemedSt... Remove this comment to see the full error message
custom ? '' : '16px')};
  width: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'custom' does not exist on type 'ThemedSt... Remove this comment to see the full error message
custom ? '' : '16px')};
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding: ${(props): string => (props.  
// @ts-expect-error TS(2339) FIXME: Property 'custom' does not exist on type 'ThemedSt... Remove this comment to see the full error message
custom ? '2px 0' : '')};
`

export const HotKeyPrompt = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  text-align: justify;
  letter-spacing: -0.233333px;
  color: ${gray};
`

export const Title = styled.span`
  display: inline;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 8px;
`
