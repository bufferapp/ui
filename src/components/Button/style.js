/* eslint-disable no-confusing-arrow */
import style, { css } from 'styled-components';
import {
  grayDarker,
  blue,
  blueDark,
  blueLighter,
  white,
  grayDark,
  gray,
  grayDefault,
  boxShadow,
  grayLight,
  orangeDark,
  orange as orangeColor,
} from '../style/colors';
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeightMedium,
} from '../style/fonts';
import { borderRadius } from '../style/borders';
import { ButtonStyled } from './Button';

/* styles common to all buttons */
export const ButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeightMedium};
  border-radius: ${borderRadius};
  cursor: pointer;
  user-select: none;
  border: 0;
  -webkit-appearance: none;
  position: relative;
  transition-property: background-color, border-color, color;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 0 0 auto;
  font-family: ${fontFamily};
  background-color: ${white};
  color: ${grayDefault};
  padding-top: 0;
  padding-bottom: 0;
  :hover {
    transition-property: background-color, border-color, color;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
  }
  :active {
    top: 1px;
  }
  :focus {
    box-shadow: 0 0 0 3px ${boxShadow};
    outline: 0;
  }
`;

/* theme variants */
export const primary = css`
  background-color: ${blue};
  color: ${white};
  border: 1px solid ${blue};
  :hover {
    background-color: ${blueDark};
    border-color: ${blueDark};
    color: ${white};
  }
`;
export const secondary = css`
  background-color: ${white};
  color: ${grayDark};
  border: 1px solid ${gray};

  :hover {
    color: ${grayDarker};
    border-color: ${grayDark};
  }

  :focus {
    border-color: ${blue};
    color: ${grayDarker};
  }
`;
export const link = css`
  background-color: transparent;
  color: ${blue};
  :hover {
    color: ${blueDark};
  }
`;
export const text = css`
  background-color: transparent;
  :hover {
    color: ${grayDarker};
  }
`;

export const orange = css`
  background-color: ${orangeDark};
  color: ${white};
  border: 1px solid ${orangeDark};
  :hover {
    background-color: ${orangeColor};
    border-color: ${orangeColor};
    color: ${white};
  }
`;

/* size variants */
export const small = css`
  padding-left: 8px;
  padding-right: 8px;
  height: 32px;
`;
export const medium = css`
  padding-right: 16px;
  padding-left: 16px;
  height: 40px;
`;
export const large = css`
  padding-right: 16px;
  padding-left: 16px;
  height: 48px;
`;

/* state variants */
export const disabled = css`
  background-color: ${grayLight};
  cursor: not-allowed;
  border: 1px solid ${grayLight};
`;

export const fullWidth = css`
  width: 100%;
  justify-content: center;
`;

export const ButtonSelect = style.div`
  :before {
    background-color: ${props => (props.disabled ? gray : blueLighter)};
    color: ${props => (props.disabled ? gray : blueLighter)};
    content: "";
    height: 24px;
    position: absolute;
    right: 34px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
  }
  padding-left: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  ${ButtonStyled}:hover & {
    background-color: ${blueDark};
    color: ${white};
  }
  ${ButtonStyled}:focus & {
    border-color: ${blue};
      color: ${grayDarker};
  }
`;

export const ButtonArrow = style.div`
  padding-left: 5px;
  display: flex;
  margin-right: -4px;
`;

export const ButtonLabel = style.div`
  margin-left: ${props => (props.hasIcon ? '5px' : '0px')};
`;
