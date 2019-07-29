import React from 'react';
import PropTypes from 'prop-types';
import { Twitter, Instagram, Facebook, Pinterest, LinkedIn } from '../Icon';
import Text from '../Text/Text';

import {
  ChannelIconContainerStyled,
  SocialButtonStyled,
} from './style';

const renderContent = channel => {
  const content = {};
  switch (channel) {
    case 'instagram':
      content.Icon = <Instagram />;
      content.name = "Instagram";
      content.cta = "Connect an Instagram profile";
      break;
    case 'twitter':
      content.Icon = <Twitter />;
      content.name = "Twitter";
      content.cta = "Connect a Twitter profile";
      break;
    case 'facebook':
      content.Icon = <Facebook />;
      content.name = "Facebook";
      content.cta = "Connect a Facebook page";
      break;
    case 'pinterest':
      content.Icon = <Pinterest />;
      content.name = "Pinterest";
      content.cta = "Connect a Pinterest profile";
      break;
    case 'linkedin':
      content.Icon = <LinkedIn />;
      content.name = "LinkedIn";
      content.cta = "Connect a LinkedIn profile";
      break;
    default:
      break;
  }
  return content;
};

const SocialButton = ({
  disabled,
  channel,
  onClick,
}) => {
  const content = renderContent(channel);
  return (
    <SocialButtonStyled
      onClick={!disabled ? onClick : undefined}
      channel={channel}
      disabled={disabled}
    >
      <ChannelIconContainerStyled>
        {content.Icon}
        <Text type="p">
          {content.name}
        </Text>
      </ChannelIconContainerStyled>
      <Text type="p">
        {content.cta}
      </Text>
    </SocialButtonStyled>
  )
};

SocialButton.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,
  /** Channel */
  channel: PropTypes.oneOf(['twitter', 'instagram', 'facebook', 'pinterest', 'linkedin']).isRequired,
  /** OnClick handler */
  onClick: PropTypes.func.isRequired,
};

SocialButton.defaultProps = {
  disabled: false,
};

export default SocialButton;
