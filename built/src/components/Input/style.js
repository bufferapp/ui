import styled, { css } from 'styled-components';
import { blue, blueLighter, gray, grayLight, grayDarker, grayDark, redDark, redLighter, redLightest, white, } from '../style/colors';
import { fontFamily, fontSize, fontWeight, lineHeight } from '../style/fonts';
import Text from '../Text';
const inputPadding = css `
  padding: ${({ size }) => {
    switch (size) {
        case 'small':
            return '5px 8px 4px 8px';
        case 'tall':
            return '13px 16px 12px 16px';
        default:
            return '9px 8px 8px 8px';
    }
}};
`;
const inputPrefix = css `
  &:before {
    content: '${({ prefix }) => prefix.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: ${gray};
    width: ${({ prefix }) => prefix.paddingLeft};
    z-index: 10;
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    margin: 8px 0;
    ${inputPadding}
    border: 1px solid transparent;
    user-select: none;
    pointer-events: none;
  }
`;
export const InputWrapper = styled.div `
  width: 100%;
`;
export const InputFieldWrapper = styled.div `
  position: relative;
  ${({ prefix }) => (prefix ? inputPrefix : '')};
`;
export const InputStyled = styled.input `
  box-sizing: border-box;
  margin: 8px 0px;
  background: ${({ hasError }) => (hasError ? redLightest : white)};
  border-radius: 4px;
  border: 1px solid ${({ hasError }) => (hasError ? redDark : gray)};
  box-shadow: 2px 2px 0 2px transparent;
  transition-property: border-width, border-color, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  color: ${({ hasError }) => (hasError ? redDark : grayDarker)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  ${inputPadding}
  width: 100%;

  ${({ prefix }) => (prefix ? `padding-left: ${prefix.paddingLeft};` : '')}
  ${({ icon }) => (icon ? `padding-left: 32px;` : '')}

  &::placeholder {
    color: ${grayDark};
  }

  &:focus {
    border: 1px solid ${({ hasError }) => (hasError ? redDark : blue)};
    box-shadow: 0px 0px 0px 3px
      ${({ hasError }) => (hasError ? redLighter : blueLighter)};
    outline: none;
    transition-property: border-width, border-color, box-shadow;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }

  &:disabled {
    background: ${grayLight};
    border: 1px solid ${grayLight};
    color: ${grayDark};
    cursor: not-allowed;

    &::placeholder {
      color: ${grayDark};
    }
  }
`;
export const HelpTextWrapper = styled.div `
  display: flex;
  display: row;
  align-items: center;
  justify-content: flex-start;
  color: ${redDark};
`;
export const HelpText = styled(Text) `
  margin-left: ${(props) => (props.hasError ? '8px' : '0px')};
`;
export const StyledIcon = styled.div `
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
`;
//# sourceMappingURL=style.js.map