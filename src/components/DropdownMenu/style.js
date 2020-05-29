import styled from 'styled-components';
import {
  blue,
  gray,
  white,
  grayLight,
  grayDarker,
  grayShadow,
} from '../style/colors';
import { ButtonBase, medium } from '../Button/style';
// import Button from '../Button/Button';

export const DropdownItems = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;

  &[role='menubar'] > li {
    display: inline;
    &:focus {
      outline: 2px solid ${blue};
    }
  }
`;

export const PopupMenu = styled.ul`
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
`;

export const Item = styled.li`
  min-height: 32px;
  align-items: center;
  color: ${props => (props.disabled ? grayLight : grayDarker)};
  cursor: pointer;
  display: flex;
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
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

/*
export const ButtomItem = styled(Button)`
  color: ${grayDarker};
  background-color: rgba(240, 248, 255, 0);
  border-radius: 0;
  button {
    padding: 0;
    justify-content: flex-start;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 4px;
    height: 32px;
  };
`;
*/


export const ButtomItem = styled.button`
  ${ButtonBase};
  ${medium};
  color: ${grayDarker};
  background-color: rgba(240, 248, 255, 0);
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
`;
