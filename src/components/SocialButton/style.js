import styled from 'styled-components';
import { 
  white,
  facebook,
  facebookDark,
  instagram,
  instagramDark,
  linkedin,
  linkedinDark,
  pinterest,
  pinterestDark,
  twitter,
  twitterDark, 
} from '../style/colors';
import { ButtonBase, large } from '../Button/style';

function calculateBgColor(channel, hover = false) {
  switch (channel) {
    case 'instagram':
      return hover ? instagramDark : instagram;
    case 'twitter':
      return hover ? twitterDark : twitter;
    case 'facebook':
      return hover ? facebookDark : facebook;
    case 'pinterest':
      return hover ? pinterestDark : pinterest;
    case 'linkedin':
      return hover ? linkedinDark : linkedin;
    default:
      return 'gray';
  }
};

export const SocialButtonStyled = styled.button`
  ${ButtonBase};
  ${large};
  background-color: ${props => calculateBgColor(props.channel)};
  color: ${white};
  width: 100%;
  justify-content: space-between;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  p {
    color: ${white};
    margin-left: 8px;
  }
  &:hover {
    background-color: ${props => calculateBgColor(props.channel, true)};
  }
`;

export const ChannelIconContainerStyled = styled.span`
  display: flex;
  align-items: center;
`;