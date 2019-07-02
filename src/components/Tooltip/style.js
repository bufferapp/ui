import styled from 'styled-components';
import {
  fontFamily,
  fontSizeSmall,
  fontWeight,
  lineHeightSmall
} from '../style/fonts';

export const Wrapper = styled.div`
`;

export const Label = styled.label`
  color: ${props => props.color};
  font-family: ${fontFamily};
  font-size: ${props => props.isHotkey ? '10px' : fontSizeSmall};
  margin-left: ${props => props.isHotkey ? '6px' : '0'};
  font-weight: ${fontWeight};
  line-height: ${lineHeightSmall};
  ${props => !props.isMultiline ? 'white-space: nowrap' : ''};
  max-width: 200px;
  cursor: inherit;
`;

export const TooltipChildren = styled.div`
`;

export const TooltipWrapperStyled = styled.div`
  display: inline-flex;
  display: block;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const TooltipStyled = styled.div`
  position: absolute;
  display: flex;
  background: #3D3D3D;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3em 0.7em;
  z-index: 9;
  top: ${props => props.top ? `${props.top}`: '0'};
  left: ${props => props.left ? `${props.left}`: '0'};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;
