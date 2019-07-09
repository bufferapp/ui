import styled from 'styled-components';
import Tooltip from '@reach/tooltip';

import {
  fontFamily,
  fontSizeSmall,
  fontWeight,
  lineHeightSmall
} from '../style/fonts';

export const TooltipWrapper = styled.div`
`;

export const TooltipStyled = styled(Tooltip)`
  background: hsla(0, 0%, 0%, 0.75);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  max-width: 200px;
  white-space: normal;
`;

export const Label = styled.label`
  color: ${props => props.color};
  font-family: ${fontFamily};
  font-size: ${props => props.isHotkey ? '10px' : fontSizeSmall};
  margin-left: ${props => props.isHotkey ? '6px' : '0'};
  font-weight: ${fontWeight};
  line-height: ${lineHeightSmall};
  cursor: inherit;
`;

export const HotkeyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
