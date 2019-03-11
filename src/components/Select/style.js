/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { grayShadow, grayLighter, white, gray } from '../style/colors';

export const Wrapper = styled.div`
  outline: 0;
  :focus {
    outline: 0;
  }
  width: ${props => (props.isSplit ? '100%' : 'auto')};
  height: ${props => (props.isSplit ? '100%' : 'auto')};
  max-height: ${props => (props.isSplit ? '100%' : '40px')};
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
  max-width: 200px;
  width: 200px;
  background-color: #ffffff;
  bottom: ${props => (props.position === 'top' ? '100%' : 'initial')};
  top: ${props =>
    props.position === 'bottom' || props.position === 'right'
      ? '100%'
      : 'initial'};
  margin-bottom: ${props => (props.position === 'top' ? '8px' : '0')};
  margin-top: ${props =>
    props.marginTop
      ? props.marginTop
      : props.position === 'bottom' || props.position === 'right'
      ? '8px'
      : '0'};
  transform: translateX(
    ${props => (props.horizontalOffset ? props.horizontalOffset : '0')}
  );
  left: ${props => (props.position === 'right' ? 0 : '')};
`;

export const SelectItems = styled.ul`
  max-height: 135px;
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
