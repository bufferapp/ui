import styled from 'styled-components';
import { blueDarker, orangeLighter, orangeDarker, white } from '../style/colors';
import { fontSize, fontFamily } from '../style/fonts';
export const BannerStyled = styled.div `
  align-items: center;
  background: ${(props) => props.themeColor === 'blue' ? blueDarker : orangeLighter};
  box-sizing: border-box;
  color: ${(props) => (props.themeColor === 'blue' ? white : orangeDarker)};
  display: flex;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  height: 48px;
  padding-left: 8px;
  padding-right: 32px;
  position: relative;
  width: 100vw;

  /** Style inline links */
  a {
    color: ${(props) => (props.themeColor === 'blue' ? white : orangeDarker)};
  }
`;
export const BannerCloseButton = styled.div `
  position: absolute;
  right: 8px;
`;
export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
`;
export const ButtonWrapper = styled.div `
  margin-left: 16px;
`;
//# sourceMappingURL=style.js.map