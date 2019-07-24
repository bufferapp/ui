import styled from 'styled-components';
import { gray, grayLight } from '../style/colors';

export const ContainerStyled = styled.div`
  width: ${props => (props.fullWidth ? '100%' : '140px')};
  height: 8px;
  background-color: ${grayLight};
  border-radius: 4px;
  margin: 16px 0px;
`;

export const ProgressStyled = styled.div`
  background-color: ${gray};
  height: 100%;
  width: ${props => props.progress || '100%'};
  border-radius: 4px;
`;
