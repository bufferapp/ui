import style from 'styled-components';
import {
  gray, grayDefault, grayLighter, white,
} from '../../style/colors';
import { fontSize, fontWeightMedium } from '../../style/fonts';

export const NavBarStyled = style.div`
  display: flex;
  align-items: center;
  background: ${grayDefault}
  padding: 12px 21px 12px 16px;
`;

export const NavBarUser = style.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  padding-right: 20px;
`;

export const NavBarAvatar = style.div`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background: ${gray}
  cursor: pointer;
`;

export const NavBarName = style.div`
  font-size: 16px;
  color: ${white};
  font-weight: ${fontWeightMedium};
`;

export const NavBarEmail = style.div`
  font-size: ${fontSize};
  color: ${grayLighter};
`;

export const NavBarChavron = style.div`
  background: #3D3D3D;
  border: 1px solid #3D3D3D;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${gray};
  height: 16px;
  width: 16px;
  display: flex;
  align-items: center;
  position: relative;
  left: 10px;
  cursor: pointer;
`;
