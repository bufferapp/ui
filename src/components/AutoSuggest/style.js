/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import {
  grayShadow,
  grayLighter,
  white,
  gray,
  grayLight,
  grayDarker,
  redLight,
  red,
} from '../style/colors';
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight
} from '../style/fonts';

export const Wrapper = styled.div`
  outline: 0;
  :focus {
    outline: 0;
  }
  width: ${props => (props.isSplit || props.fullWidth ? '100%' : 'auto')};
  height: ${props => (props.isSplit ? '100%' : 'auto')};
  max-height: ${props => (props.isSplit ? '100%' : '')};
  position: ${props => (props.isSplit ? 'initial' : 'relative')};
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
  background-color: #ffffff;
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
  padding-bottom: 16px;
  padding-top: 16px;
  position: relative;
  z-index: -1;
  background: ${white};
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
  border-radius: 4px;
  list-style: none;
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
  box-sizing: border-box;
  margin: 8px 0px;
  background: ${({ hasError }) => (hasError ? redLight : white)};
  border-radius: 4px;
  border: 1px solid ${({ hasError }) => (hasError ? red : grayLight)};
  box-shadow: 2px 2px 0 2px transparent;
  transition-property: border-width, border-color, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  color: ${({ hasError }) => (hasError ? red : grayDarker)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  padding: ${({ size }) => {
  switch (size) {
    case 'small':
      return '5px 8px 4px 8px';
    case 'tall':
      return '13px 16px 12px 16px';
    default:
      return '9px 8px 8px 8px';
  }
}};
  width: 100%;
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
