import style from 'styled-components';
import {
  gray, grayDark, grayLight, white,
} from '../../style/colors';
import { fontSize, fontWeightMedium } from '../../style/fonts';

export const NavBarStyled = style.div`
  display: flex;
  align-items: center;
  background: ${grayDark};
  padding: 12px 8px 12px 16px;
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
  background: ${gray};
  cursor: pointer;
  background-size: cover;
  background-image: url(${props => (props.avatar)});
`;

export const NavBarName = style.div`
  font-size: 16px;
  color: ${white};
  font-weight: ${fontWeightMedium};
`;

export const NavBarEmail = style.div`
  font-size: ${fontSize};
  color: ${grayLight};
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
  left: -8px;
  cursor: pointer;
`;
