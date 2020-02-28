import styled from 'styled-components';
import {
  gray, grayDark, grayDarker, grayLight, grayLighter, white, orangeLighter, orangeDark,
} from '../../style/colors';

import {
  fontSize,
  fontWeightMedium,
  fontFamily
} from '../../style/fonts';

export const NavBarStyled = styled.div`
  align-items: center;
  background-color: ${props => (props.isImpersonation ? orangeLighter : `#fff`)}; 
  cursor: pointer;
  display: flex;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  z-index: 2;
  &:hover {
    background-color: ${props => (props.isImpersonation ? orangeLighter : grayLighter)};
  }
`;

export const NavBarUser = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  padding-right: 16px;
`;

export const NavBarAvatar = styled.div`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background: ${gray};
  background-size: cover;
  background-image: url(${props => (props.avatar)});
`;

export const NavBarName = styled.div`
  color: ${props => (props.isImpersonation ? orangeDark : grayDark)};
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: ${fontWeightMedium};
  max-width: 224px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NavBarEmail = styled.div`
  color: ${props => (props.isImpersonation ? orangeDark : gray)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  max-width: 224px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NavBarChavron = styled.div`
  align-items: center;
  background: ${white};
  border-radius: 4px;
  box-shadow: 0 0 0 2px ${grayLight};
  box-sizing: border-box;
  color: ${grayDarker};
  cursor: pointer;
  display: flex;
  height: 16px;
  position: absolute;
  right: 8px;
  width: 16px;
`;
