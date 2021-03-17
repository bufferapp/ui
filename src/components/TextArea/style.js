import styled from 'styled-components';
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
} from '../style/colors';
import { fontFamily, fontSize, fontWeight, lineHeight } from '../style/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const backgroundCss = ({ disabled, hasError }) => {
  if (disabled) {
    return grayLight;
  }
  if (hasError) {
    return redLightest;
  }
  return white;
};

const borderCss = ({ disabled, hasError }) => {
  if (disabled) {
    return 'none';
  }
  if (hasError) {
    return `1px solid ${redDark}`;
  }
  return `1px solid ${gray}`;
};

export const StyledTextArea = styled.textarea`
  border-radius: 4px;
  box-shadow: 2px 2px 0 2px transparent;
  transition-property: border-width, border-color, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  background-color: ${backgroundCss};
  border: ${borderCss};
  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 8px;
  resize: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : '')};
  padding: 8px;
  color: ${({ hasError }) => (hasError ? redDark : grayDarker)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  :focus {
    border: 1px solid ${({ hasError }) => (hasError ? redDark : blue)};
    box-shadow: 0px 0px 0px 3px
      ${({ hasError }) => (hasError ? redLighter : boxShadow)};
    outline: none;
    transition-property: border-width, border-color, box-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
  &::placeholder {
    color: ${grayDark};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
