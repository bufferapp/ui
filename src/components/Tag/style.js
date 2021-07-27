import styled from 'styled-components';
import { fontSize, fontWeightMedium, lineHeight } from '../style/fonts';
import textColors, * as Colors from '../style/colors';

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-weight: ${fontWeightMedium};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-left: 8px;
  border-radius: 100px;
  color: ${(props) => textColors[props.textColor]};
  background-color: ${(props) => Colors[props.color]};

  &:hover {
    color: ${(props) => textColors[props.textColor]};
  }
`;
