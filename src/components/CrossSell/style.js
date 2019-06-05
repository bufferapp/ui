import styled from 'styled-components';

export const CrossSellStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  z-index: 1;
`;

export const CrossSellHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 582px;
  margin-top: 40px;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  width: 291px;
  height: 328px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 16px;
  margin: 32px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const CustomH3 = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 8px;
`;

export const ButtonMargin = styled.div`
  margin: 0 8px 16px;
  width: 258px;
`;

export const SVGContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`;
