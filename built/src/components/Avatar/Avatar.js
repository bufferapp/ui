import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';
import { facebook, googlebusiness, instagram, linkedin, pinterest, shopify, tiktok, twitter, startpage, mastodon, youtube, } from '../style/colors';
import { Facebook, Gbp, Instagram, LinkedIn, Pinterest, Shopify, Tiktok, Twitter, StartPage, Mastodon, Youtube, } from '../Icon';
const Wrapper = styled.div `
  ${(props) => Styles.wrapper[props.size]}
`;
const Image = styled.div `
  ${(props) => Styles.image[props.type][props.size]}
`;
const socialIconMap = new Map([
    [
        'instagram',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: instagram },
            React.createElement(Instagram, { size: "small", color: "white" }))),
    ],
    [
        'facebook',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: facebook },
            React.createElement(Facebook, { size: "small", color: "white" }))),
    ],
    [
        'twitter',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: twitter },
            React.createElement(Twitter, { size: "small", color: "white" }))),
    ],
    [
        'linkedin',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: linkedin },
            React.createElement(LinkedIn, { size: "small", color: "white" }))),
    ],
    [
        'pinterest',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: pinterest },
            React.createElement(Pinterest, { size: "small", color: "white" }))),
    ],
    [
        'googlebusiness',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: googlebusiness },
            React.createElement(Gbp, { size: "small", color: "white" }))),
    ],
    [
        'shopify',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: shopify },
            React.createElement(Shopify, { size: "small", color: "white" }))),
    ],
    [
        'tiktok',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: tiktok },
            React.createElement(Tiktok, { size: "small", color: "white" }))),
    ],
    [
        'startPage',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: startpage },
            React.createElement(Styles.StartPageIcon, null,
                React.createElement(StartPage, { size: "small", color: "white" }),
                ' '))),
    ],
    [
        'mastodon',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: mastodon },
            React.createElement(Mastodon, { size: "small", color: "white" }))),
    ],
    [
        'youtube',
        ({ size }) => (React.createElement(Styles.SocialIconWrapper, { size: size, bgColor: youtube },
            React.createElement(Youtube, { size: "small", color: "white" }))),
    ],
]);
const Avatar = ({ src, alt, type, size, network, fallbackUrl }) => {
    const SocialIcon = network && socialIconMap.get(network);
    return (React.createElement(Wrapper, { size: size },
        SocialIcon && React.createElement(SocialIcon, { size: size }),
        React.createElement(Image, { size: size, type: type, src: src, fallbackUrl: fallbackUrl, alt: alt })));
};
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallbackUrl: PropTypes.string,
    type: PropTypes.oneOf(['default', 'social', 'status']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    network: PropTypes.oneOf([
        'facebook',
        'twitter',
        'instagram',
        'linkedin',
        'google',
        'pinterest',
        'shopify',
        'tiktok',
        'startPage',
        'googlebusiness',
        'mastodon',
        'youtube',
    ]),
};
Avatar.defaultProps = {
    type: 'default',
    size: 'small',
    fallbackUrl: '',
    network: null,
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map