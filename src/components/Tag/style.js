import styled from 'styled-components';
import { fontSizeSmall, fontWeightMedium } from '../style/fonts';
import textColors, * as Colors from '../style/colors';

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-weight: ${fontWeightMedium};
  font-size: ${fontSizeSmall};
  margin-left: 8px;
  border-radius: 100px;
  color: ${(props) => textColors[props.textColor]};
  background-color: ${(props) => Colors[props.color]};
`;
