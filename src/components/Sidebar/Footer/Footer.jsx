import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar/Avatar';
import { FooterStyled, AvatarContainer } from './style';

const Footer = ({ onlineUsers }) => (
  <FooterStyled>
    {onlineUsers.map(user => (
      <AvatarContainer>
        <Avatar
          src={user.profileImageUrl}
          alt={user.name}
          size="small"
          type="social"
          network="instagram"
        />
      </AvatarContainer>
    ))}
  </FooterStyled>
);

Footer.propTypes = {
  onlineUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      orgId: PropTypes.string,
      profileImageUrl: PropTypes.string,
    })
  ).isRequired,
};

export default Footer;
