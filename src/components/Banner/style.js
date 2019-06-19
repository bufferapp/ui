import styled from 'styled-components';
import { blueDarker, orangeLighter, orangeDark } from '../style/colors';

export const BannerStyled = styled.div`
  display: flex;
  height: 48px;
  width: 100vw;
  align-items: center;
  color: ${props => props.theme.color === 'blue' ? '#fff' : orangeDark};
  background: ${props => props.theme.color === 'blue' ? blueDarker : orangeLighter};
  padding-left: 8px;
  padding-right: 32px;
  position: relative;

  /** Simple classes for customHTML */
  .banner-text {
    color: ${props => props.theme.color === 'blue' ? '#fff' : orangeDark};
  }
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
