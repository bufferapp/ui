import styled from 'styled-components'
import {
  facebookDark,
  instagramDark,
  linkedinDark,
  pinterestDark,
  twitterDark,
  white,
} from '../style/colors'
import { ButtonBase, large } from '../Button/style'

function calculateBgColor(channel: string): string {
  switch (channel) {
    case 'instagram':
      return instagramDark
    case 'twitter':
      return twitterDark
    case 'facebook':
      return facebookDark
    case 'pinterest':
      return pinterestDark
    case 'linkedin':
      return linkedinDark
    default:
      return 'gray'
  }
}

export const SocialButtonStyled = styled.button<{
  disabled: boolean
  channel: string
}>`
  ${ButtonBase};
  ${large};
  background-color: ${(props): string => calculateBgColor(props.channel)};
  color: ${white};
  width: 100%;
  justify-content: space-between;
  cursor: ${(props): string => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0);
  transition: box-shadow 0.1s ease;

  p {
    color: ${white};
    margin-left: 8px;
    line-height: normal;
  }

  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.1s ease;
  }
`

export const ChannelIconContainerStyled = styled.span`
  display: flex;
  align-items: center;
`
