/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import {
  grayShadow,
  grayLighter,
  white,
  gray,
  grayLight,
  grayDarker,
} from '../style/colors';
import { fontFamily } from '../style/fonts';

export const Wrapper = styled.div`
  outline-style: none;
  :focus {
    outline-style: 0;
  }
  width: ${(props) => (props.isSplit || props.fullWidth ? '100%' : 'auto')};
  height: ${(props) => (props.isSplit ? '100%' : 'auto')};
  max-height: ${(props) => (props.isSplit ? '100%' : '')};
  position: ${(props) => (props.isSplit ? 'initial' : 'relative')};
  display: inline-block;
`;

export const SelectStyled = styled.div`
  right: ${props => (props.hasIconOnly ? '6px' : '0')};
  position: absolute;
  z-index: 1000;
  border: 1px solid ${gray};
  box-sizing: border-box;
  box-shadow: ${grayShadow};
  border-radius: 4px;
  display: ${props => (props.isOpen ? 'initial' : 'none')};
  min-width: 200px;
  max-width: ${props => (props.fullWidth ? '' : '200px')};
  width: ${props => (props.fullWidth ? '100%' : '200px')};
  background-color: ${white};
  bottom: ${props => (props.yPosition === 'top' ? '100%' : 'initial')};
  top: ${props => (props.yPosition === 'bottom' ? '100%' : 'initial')};
  margin-bottom: ${props => (props.yPosition === 'top' ? '8px' : '0')};
  margin-top: ${props =>
    props.marginTop
      ? props.marginTop
      : props.yPosition === 'bottom' || props.xPosition === 'right'
      ? '8px'
      : '0'};
  transform: translateX(
    ${props => (props.horizontalOffset ? props.horizontalOffset : '0')}
  );
  left: ${props => (props.xPosition === 'left' ? 0 : '')};
`;

export const SelectItems = styled.ul`
  max-height: 195px;
  overflow-y: auto;
  position: relative;
  z-index: -1;
  background: ${white};
  border-radius: 4px;
  list-style: none;
  margin: 8px 0px;
  padding: 0;
`;

export const SelectItemDivider = styled.li`
  background-color: ${grayLighter};
  height: 1px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding: 0;
  pointer-events: none;
  width: 100%;
`;

export const SelectItemDividerTitle = styled.span`
  position: relative;
  top: -11px;
  margin-left: 8px;
  background: white;
  padding: 0 8px;
  font-size: 12px;
  font-family: ${fontFamily};
  color: ${gray};
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ecf0f3;
  align-items: center;
  padding-left: 16px;
  color: ${gray};
`;

export const NoMatchesContainer = styled.p`
  width: 116px;
  height: 17px;
  margin: 0 auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
  letter-spacing: -0.233333px;
  color: ${gray};
`;

export const CustomItemContainer = styled.li`
  min-height: 32px;
  align-items: center;
  color: ${grayDarker};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  &:hover {
    background-color: ${grayLight};
  }
  background-color: ${props =>
    props.isCustomItemFocused ? `${grayLight}` : ''};
`;
