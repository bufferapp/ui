import styled from 'styled-components';
import { blue, gray, white, grayShadow, grayLighter } from '../../style/colors';

export const PopupMenuStyled = styled.ul`
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
  background-color: ${white};
  top: ${props => (props.isSubmenu ? '-1px' : '100%')};
  bottom: initial;
  margin-bottom: 0;
  margin-top: ${props => (props.isSubmenu ? '' : '8px')};
  padding: 8px 0;
  transform: translateX(
    ${props => (props.horizontalOffset ? props.horizontalOffset : '0')}
  );
  right: ${props => {
    const { xPosition, isSubmenu } = props;
    if (xPosition === 'left' && isSubmenu) return '100%';
    if (xPosition === 'right' && !isSubmenu) return 0;
    return '';
  }};
  left: ${props => {
    const { xPosition, isSubmenu } = props;
    if (xPosition === 'left' && !isSubmenu) return 0;
    return '';
  }};

  &[role='menu'] > li {
    & button:focus {
      outline: 1px solid ${blue};
    }
    padding: 0 8px;
  }
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
