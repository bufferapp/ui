import styled from 'styled-components';
import {
  blue,
  gray,
  grayLight,
  grayDarker,
} from '../style/colors';
import { fontFamily, fontWeightMedium } from '../style/fonts';
import { ButtonBase, medium } from '../Button/style';
import { ORG_SWITCHER } from '../NavBar/NavBar';

export const DropdownItems = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;

  &[role='menubar'] > li {
    display: flex;
    position: relative;

    & [role='menuitem']:focus {
      outline: ${props => (props.usingMouse ? 'none' : `1px solid ${blue}`)};
      outline-offset: -1px;
    }
  }
`;

export const Item = styled.li`
  font-family: ${fontFamily};
  font-weight: ${fontWeightMedium};
  font-size: 14px;
  line-height: 16px;
  position: ${props => (props.type === ORG_SWITCHER ? 'relative' : '')};
  min-height: 32px;
  align-items: center;
  color: ${props => (props.disabled ? grayLight : gray)};
  cursor: pointer;
  display: flex;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  background-color: transparent;
  padding: ${props => props.menuOption ? 0 : '0 8px'};
  margin: ${props => {
    const { type } = props;
    return type === 'header' ? '0 0 5px 5px' : '';
  }};
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
    svg {
      fill: ${grayDarker};
    }
    & * {
      color: ${grayDarker};
      fill: ${grayDarker};
    }
  }
`;

export const ButtonLabel = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: ${props => {
    const { hasIcon, type } = props;
    if (type === ORG_SWITCHER) {
      return hasIcon ? '5px' : '21px';
    }
    return hasIcon ? '5px' : '0px';
  }};
  margin-right: ${props => (props.hasIcon ? '5px' : '0px')};
`;
