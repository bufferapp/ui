import styled from 'styled-components'
import * as ButtonStyles from '../../Button/style';

export const SidebarItemStyled = styled.a`
  ${ButtonStyles.ButtonBase}
  ${ButtonStyles.primary}
  ${ButtonStyles.small}
  text-decoration: none;
  margin-bottom: 8px;
`;

export const Label = styled.span`
  margin-left: ${props => (props.hasIcon ? '5px' : '0px')};
`;