import styled from 'styled-components';

export const CrossSellStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CrossSellHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  text-align: center;
  z-index: 1;
`;

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
`;

export const Card = styled.div`
  width: 291px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
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

export const SVGContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: -4px;
  z-index: -1;
`;

export const CardImage = styled.img`
  width: 100%;
`
