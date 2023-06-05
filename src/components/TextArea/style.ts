import styled from 'styled-components'
import {
  redDark,
  gray,
  grayDark,
  white,
  blue,
  grayLight,
  grayDarker,
  redLighter,
  redLightest,
  boxShadow,
} from '../style/colors'
import { fontFamily, fontSize, fontWeight, lineHeight } from '../style/fonts'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

interface ITextArea {
  disabled?: boolean
  fullHeight?: boolean
  hasError?: boolean
}

const backgroundCss = ({ disabled, hasError }: ITextArea): string => {
  if (disabled) {
    return grayLight
  }
  if (hasError) {
    return redLightest
  }
  return white
}

const borderCss = ({ disabled, hasError }: ITextArea): string => {
  if (disabled) {
    return 'none'
  }
  if (hasError) {
    return `1px solid ${redDark}`
  }
  return `1px solid ${gray}`
}

export const StyledTextArea = styled.textarea<ITextArea>`
  border-radius: 4px;
  box-shadow: 2px 2px 0 2px transparent;
  transition-property: border-width, border-color, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  background-color: ${(props): string =>
    backgroundCss({ disabled: props.disabled, hasError: props.hasError })};
  border: ${(props): string =>
    borderCss({ disabled: props.disabled, hasError: props.hasError })};
  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 8px;
  resize: none;
  cursor: ${(props): string => (props.disabled ? 'not-allowed' : '')};
  padding: 8px;
  color: ${({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    hasError,
  }): string => (hasError ? redDark : grayDarker)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  height: ${({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    fullHeight,
  }): string => (fullHeight ? '100%' : 'auto')};
  :focus {
    border: 1px solid
      ${({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        hasError,
      }): string => (hasError ? redDark : blue)};
    box-shadow: 0px 0px 0px 3px
      ${({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        hasError,
      }): string => (hasError ? redLighter : boxShadow)};
    outline: none;
    transition-property: border-width, border-color, box-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
  &::placeholder {
    color: ${grayDark};
  }
`

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`
