import styled from 'styled-components';
import { white } from '../style/colors';
import { borderRadius } from '../style/borders';

function calculateBgColor(channel, hover = false) {
  switch (channel) {
    case 'instagram':
      return hover ? '#d0388e' : '#BD3381';
    case 'twitter':
      return hover ? '#35aaf3' : '#1DA1F2';
    case 'facebook':
      return hover ? '#4262a9' : '#4267B2';
    default:
      return 'gray';
  }
};

export const SocialButtonStyled = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: space-between;
  background-color: ${props => calculateBgColor(props.channel)};
  color: ${white};
  border: none;
  border-radius: ${borderRadius};
  padding: 16px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  p {
    color: ${white};
    margin-left: 8px;
  }
  &:hover {
    background-color: ${props => calculateBgColor(props.channel, true)};
    transition: background-color 0.25s ease;
  }
`;

export const ChannelIconContainerStyled = styled.span`
  display: flex;
  align-items: center;
`;