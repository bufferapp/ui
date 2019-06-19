import styled from 'styled-components';
import { blueDarker } from '../style/colors';

export const BannerStyled = styled.div`
  align-items: center;
  background: ${blueDarker};
  color: #fff;
  display: flex;
  height: 48px;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
  width: 100vw;
`;

export const BannerCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
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
