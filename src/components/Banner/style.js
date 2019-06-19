import styled from 'styled-components';
import { blueDarker, orangeLighter, orangeDark } from '../style/colors';

export const BannerStyled = styled.div`
  height: 64px;
  width: 100vw;
  background: ${props => props.theme.color === 'blue' ? blueDarker : orangeLighter};
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: calc(100vw - 16px);
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-left: 16px;
`;
