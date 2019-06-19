import styled from 'styled-components';
import { blueDarker, orangeLighter, orangeDark } from '../style/colors';
import { fontSize } from '../style/fonts';

export const BannerStyled = styled.div`
  display: flex;
  height: 48px;
  width: 100vw;
  align-items: center;
  color: ${props => props.themeColor === 'blue' ? '#fff' : orangeDark};
  background: ${props => props.themeColor === 'blue' ? blueDarker : orangeLighter};
  padding-left: 8px;
  padding-right: 32px;
  position: relative;
  box-sizing: border-box;
  font-size: ${fontSize};
`;

export const BannerCloseButton = styled.div`
  position: absolute;
  right: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
`;

export const ButtonWrapper = styled.div`
  margin-left: 16px;
`;
