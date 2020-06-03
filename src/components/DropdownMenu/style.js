import styled from 'styled-components';
import ChevronUpIcon from '../Icon/Icons/ChevronUp';
import {
  blue,
  gray,
  grayLight,
  grayLighter,
  grayDarker,
} from '../style/colors';
import { fontFamily } from '../style/fonts';
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
      outline: 1px solid ${blue};
      outline-offset: -1px;
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
  background-color: ${props =>
    props.type && props.type === ORG_SWITCHER ? grayLighter : 'transparent'};
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
