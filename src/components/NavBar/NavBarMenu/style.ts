import styled from 'styled-components'
import {
  gray,
  grayDark,
  grayDarker,
  grayLight,
  grayLighter,
  white,
} from '../../style/colors'

import { fontSize, fontWeightMedium, fontFamily } from '../../style/fonts'

export const NavBarStyled = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  z-index: 2;
  &:hover {
    background-color: ${grayLighter};
  }
`

export const NavBarUser = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  padding-right: 16px;
`

export const NavBarImpersonating = styled.div`
  font-family: ${fontFamily};
  background: ${grayDarker};
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  color: ${white};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-top: ${(props): string => (props.user.name ? '-8px' : '-21px')};
  margin-bottom: ${(props): string => (props.user.name ? '0px' : '5px')};
  text-transform: uppercase;
`

export const NavBarAvatar = styled.div`
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background: ${gray};
  background-size: cover;
  background-image: url(${(props): string => props.avatar});
`

export const NavBarName = styled.div`
  color: ${grayDark};
  font-family: ${fontFamily};
  font-size: 16px;
  font-weight: ${fontWeightMedium};
  max-width: 224px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const NavBarEmail = styled.div`
  color: ${gray};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  max-width: 224px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

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
  justify-content: center;
`
