import styled from 'styled-components';
import { grayDarker, gray, grayLight } from '../../style/colors';
import { fontWeightMedium, fontSize } from '../../style/fonts';

export const SelectItemStyled = styled.li`
  min-height: 32px;
  align-items: center;
  color: ${grayDarker};
  cursor: pointer;
  display: flex;
  font-size: ${fontSize};
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: ${props => (props.hovered ? grayLight : 'transparent')};
  &:hover {
    background-color: ${grayLight};
  }
`;

export const SelectItemLabel = styled.div`
  font-size: ${fontSize};
  font-weight: ${fontWeightMedium};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  padding: 0px 16px;
  display: flex;
  align-items: center;
`;

export const SelectItemIcon = styled.div`
  display: flex;
  padding-right: 4px;
  svg {
    fill: ${props => (props.hovered ? grayDarker : gray)};
  }
  ${SelectItemStyled}:hover & * {
    color: ${grayDarker};
    fill: ${grayDarker};
  }
`;

export const SelectItemTitle = styled.div`
  margin-left: ${props => (props.moveRight ? '26px' : '10px')};
`;

export const SelectItemCustom = styled.div`
  display: flex;
  align-items: center;
`;
