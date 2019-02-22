import { css } from 'styled-components';
import {
  fontFamily,
  fontSize,
  fontSizeH3
} from '../style/fonts';
import { grayDark, grayDarker } from '../style/colors';

export const FormBase = css`
  width: 100%;
`;

export const title = css`
  font-family: ${fontFamily};
  font-size: ${fontSizeH3};
  font-weight: 500;
  line-height: normal;
  margin: 8px 0px;
  color: ${grayDarker};
  width: 100%;
`;

export const subTitle = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: 500;
  line-height: normal;
  margin: 0px;
  color: ${grayDark};
  width: 100%;
`;