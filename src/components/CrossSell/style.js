import styled from 'styled-components';
import { grayLighter } from '../style/colors';

export const CrossSellStyled = styled.div`
  width: 100vw;
  background-color: ${grayLighter};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const CrossSellHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
  text-align: center;
  z-index: 1;
`;

export const SubHeaderWrapper = styled.div`
  width: 530px;
  margin-top: 8px;
`

export const CardsContainer = styled.div`
  display: flex;
  z-index: 2;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  margin-bottom: 56px;
`;

export const Card = styled.div`
  width: 291px;
  padding: 16px;
  margin: 32px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const TitleContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  margin: 0 0 16px;
  width: 182px;
`;

export const CardImage = styled.img`
  width: 100%;
`
