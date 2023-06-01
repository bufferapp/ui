import React from 'react';
import PropTypes from 'prop-types';
import { Twitter, Instagram, Facebook, Pinterest, LinkedIn } from '../Icon';
import Text from '../Text/Text';
import { ChannelIconContainerStyled, SocialButtonStyled } from './style';
const renderContent = (channel) => {
    const content = {};
    switch (channel) {
        case 'instagram':
            content.Icon = React.createElement(Instagram, null);
            content.name = 'Instagram';
            content.cta = 'Connect an Instagram business account';
            break;
        case 'twitter':
            content.Icon = React.createElement(Twitter, null);
            content.name = 'Twitter';
            content.cta = 'Connect a Twitter profile';
            break;
        case 'facebook':
            content.Icon = React.createElement(Facebook, null);
            content.name = 'Facebook';
            content.cta = 'Connect a Facebook page';
            break;
        case 'pinterest':
            content.Icon = React.createElement(Pinterest, null);
            content.name = 'Pinterest';
            content.cta = 'Connect a Pinterest profile';
            break;
        case 'linkedin':
            content.Icon = React.createElement(LinkedIn, null);
            content.name = 'LinkedIn';
            content.cta = 'Connect a LinkedIn profile';
            break;
        default:
            break;
    }
    return content;
};
const SocialButton = ({ disabled, channel, onClick }) => {
    const content = renderContent(channel);
    return (React.createElement(SocialButtonStyled, { onClick: !disabled ? onClick : undefined, channel: channel, disabled: disabled },
        React.createElement(ChannelIconContainerStyled, null,
            content.Icon,
            React.createElement(Text, { type: "p" }, content.name)),
        React.createElement(Text, { type: "p" }, content.cta)));
};
SocialButton.propTypes = {
    disabled: PropTypes.bool,
    channel: PropTypes.oneOf([
        'twitter',
        'instagram',
        'facebook',
        'pinterest',
        'linkedin',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
};
SocialButton.defaultProps = {
    disabled: false,
};
export default SocialButton;
//# sourceMappingURL=SocialButton.js.map