import styled from 'styled-components';
import {
  fontFamily,
  fontSizeSmall,
  fontWeight,
  lineHeightSmall
} from '../style/fonts';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  color: ${props => props.color};
  font-family: ${fontFamily};
  font-size: ${fontSizeSmall};
  font-weight: ${fontWeight};
  line-height: ${lineHeightSmall};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: inherit;
`;

export const TooltipChildren = styled.div`
  width: 100%;
`;

export const TooltipWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const TooltipStyled = styled.div`
  position: absolute;
  display: flex;
  top: 8px;
  background: #3D3D3D;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.3em 0.7em;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;
