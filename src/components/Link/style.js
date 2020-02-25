import styled from 'styled-components';
import { blue, blueDark } from '../style/colors';
import {
  fontFamily,
  fontSize,
  fontWeightMedium,
  lineHeight,
} from '../style/fonts';

export const LinkStyled = styled.a`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeightMedium};
  line-height: ${lineHeight};
  color: ${blue};
  :hover {
    color: ${blueDark};
  }
`;
