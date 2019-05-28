import styled from 'styled-components';
import {
  gray, grayDark, grayDarker, grayLight, white,
} from '../../style/colors';
import { fontSize, fontWeightMedium } from '../../style/fonts';

export const NavBarStyled = styled.div`
  align-items: center;
  border-left: 1px solid #525252;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  &:hover {
    background-color: #525252;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${white};
  font-size: 16px;
  font-weight: ${fontWeightMedium};
  max-width: 224px;
`;

export const NavBarEmail = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${grayLight};
  font-size: ${fontSize};
  max-width: 224px;
`;

export const NavBarChavron = styled.div`
  align-items: center;
  background: ${grayDark};
  border-radius: 4px;
  box-shadow: 0 0 0 2px ${grayDarker};
  box-sizing: border-box;
  color: ${gray};
  cursor: pointer;
  display: flex;
  height: 16px;
  position: absolute;
  right: 8px;
  width: 16px;
`;
