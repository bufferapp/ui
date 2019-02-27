import styled from 'styled-components'
import * as ButtonStyles from '../../Button/style'
import { blue, white } from '../../style/colors'

export const SidebarItemStyled = styled.a`
  ${ButtonStyles.ButtonBase}
  ${ButtonStyles.small}
  text-decoration: none;
  margin-bottom: 8px;
  background-color: ${blue};
  color: ${white};
  cursor: default;

  :active {
    top: 0;
  }
  :focus {
    box-shadow: none;
    outline: 0;
  }
`;

export const Label = styled.span`
  margin-left: ${props => (props.hasIcon ? '5px' : '0px')};
`;