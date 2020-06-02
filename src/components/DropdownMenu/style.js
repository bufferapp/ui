import styled from 'styled-components';
import ChevronUpIcon from '../Icon/Icons/ChevronUp';
import {
  blue,
  gray,
  white,
  grayLight,
  grayLighter,
  grayDarker,
  grayShadow,
} from '../style/colors';
import { fontFamily } from '../style/fonts';
import { ButtonBase, medium } from '../Button/style';

import { ORG_SWITCHER } from '../NavBar/NavBar';

export const DropdownItems = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  height: 100%;

  &[role='menu'] > li {
    display: flex;
    & [role='menuitem']:focus {
      outline: 1px solid ${blue};
      outline-offset: -1px;
    }
  }
`;

export const PopupMenuStyled = styled.ul`
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
    // eslint-disable-next-line no-nested-ternary
    props.marginTop
      ? props.marginTop
      : props.yPosition === 'bottom' || props.xPosition === 'right'
      ? '8px'
      : '0'};
  transform: translateX(
    ${props => (props.horizontalOffset ? props.horizontalOffset : '0')}
  );
  left: ${props => (props.xPosition === 'left' ? 0 : '')};
  padding: 8px 0;

  &[role='menu'] > li {
    & button:focus {
      outline: 1px solid ${blue};
    }
  }
`;

export const Item = styled.li`
  min-height: 32px;
  align-items: center;
  color: ${props => (props.disabled ? grayLight : grayDarker)};
  cursor: pointer;
  display: flex;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  background-color: ${props => (props.hovered ? grayLight : 'transparent')};
  background-color: ${props => (props.type && props.type === ORG_SWITCHER ? grayLighter : 'transparent')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  padding-left: 8px;
  padding-right: 8px;
`;

export const ItemDivider = styled.li`
  background-color: ${grayLighter};
  height: 1px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding: 0;
  pointer-events: none;
  width: 100%;
  list-style: none;
`;

export const ItemDividerTitle = styled.span`
  position: relative;
  top: -11px;
  margin-left: 8px;
  background: white;
  padding: 0 8px;
  font-size: 12px;
  font-family: ${fontFamily};
  color: ${gray};
`;

export const ButtonItemStyled = styled.button`
  ${ButtonBase};
  ${medium};
  color: ${grayDarker};
  background: none transparent;
  border-radius: 0;
  justify-content: flex-start;
  border-radius: 4px;
  height: 32px;
  width: 100%;
  padding: 0px 8px;
  margin: 0;
  :focus {
    box-shadow: none;
  }
  :hover {
    background-color: ${grayLight};
  }
`;

export const ButtonLabel = styled.div`
  margin-left: ${props => (props.hasIcon ? '5px' : '0px')};
  margin-right: ${props => (props.hasIcon ? '5px' : '0px')};
`;

export const ChevronLeftIcon = styled(ChevronUpIcon)`
  transform: rotate(-90deg);
`;
