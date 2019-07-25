import styled from 'styled-components';
import { gray, grayLight } from '../style/colors';
import { borderRadius } from '../style/borders';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${grayLight};
  border-radius: ${borderRadius};
  margin: 16px 0px;
`;

export const ProgressStyled = styled.div`
  background-color: ${gray};
  height: 100%;
  width: ${props => props.progress || '100%'};
  border-radius: ${borderRadius};
`;
