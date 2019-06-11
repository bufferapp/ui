import styled from 'styled-components';
import { grayDarker, gray } from '../style/colors';

export const ItemStyled = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${props =>
      props.isSelected ? '#2C4BFF' : 'rgba(0, 0, 0, 0.15)'};
  }
  cursor: pointer;
  height: ${props => (props.hasUser ? '48px' : '32px')};
  border-radius: 4px;
  padding-left: 8px;
  background-color: ${props => (props.isSelected ? '#2C4BFF' : 'transparent')};
`;

export const Badge = styled.span`
  margin-left: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: ${props => (props.isSelected ? 'white' : '#3d3d3d')};
  margin-right: 8px;
`;

export const NameHandleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Handle = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.2px;
  color: ${props => (props.isSelected ? 'white' : '#636363')};
`;

export const LabelContainer = styled.div`
  display: flex;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 8px;
`;

export const IconContainer = styled.span`
  margin-right: 8px;
  display: inline-block;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  svg {
    fill: ${gray}};
  }
  ${ItemStyled}:hover & * {
    color: ${props => (props.isSelected ? gray : grayDarker)};
    fill: ${props => (props.isSelected ? gray : grayDarker)};
  }
`;
