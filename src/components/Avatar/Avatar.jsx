/* eslint-disable */
import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Styles from './style';
// import { socialNetworks } from '../constants';
import { facebook, googleplus, instagram, linkedin, pinterest, twitter } from '../style/colors';
import { Instagram, Facebook, Twitter, LinkedIn, Pinterest, GooglePlus } from '../Icon';

const Wrapper = styled.div`
  ${props => Styles.wrapper[props.size]}
`;

const Image = styled.img`
  ${props => Styles.image[props.type][props.size]}
`;

const socialIconMap = new Map([
  ['instagram', ({ size }) => (
    <Styles.SocialIconWrapper size={size} bgColor={instagram}>
      <Instagram size="smallest" color="white" />
    </Styles.SocialIconWrapper>
  )],
  ['facebook', ({ size }) => (
    <Styles.SocialIconWrapper size={size} bgColor={facebook}>
      <Facebook size="smallest" color="white" />
    </Styles.SocialIconWrapper>
  )],
  ['twitter', ({ size }) => (
    <Styles.SocialIconWrapper size={size} bgColor={twitter}>
      <Twitter size="smallest" color="white" />
    </Styles.SocialIconWrapper>
  )],
  ['linkedin', ({ size }) => (
    <Styles.SocialIconWrapper size={size} bgColor={linkedin}>
      <LinkedIn size="smallest" color="white" />
    </Styles.SocialIconWrapper>
  )],
  ['pinterest', ({ size }) => (
    <Styles.SocialIconWrapper size={size} bgColor={pinterest}>
      <Pinterest size="smallest" color="white" />
    </Styles.SocialIconWrapper>
  )],
  ['googleplus', ({ size }) => (
    <Styles.SocialIconWrapper size={size} bgColor={googleplus}>
      <GooglePlus size="smallest" color="white" />
    </Styles.SocialIconWrapper>
  )],
]);

const Avatar = ({
  src,
  alt,
  type,
  size,
  isOnline,
  network,
}) => {
  const SocialIcon = network && socialIconMap.get(network);
  return (
    <Wrapper size={size}>
      {SocialIcon && <SocialIcon size={size} />}
      <Image size={size} type={type} src={src} alt={alt} />
    </Wrapper>
  );
};

Avatar.propTypes = {
  /** The source of the avatar image. */
  src: PropTypes.string.isRequired,
  /** The alt text for the avatar image. */
  alt: PropTypes.string.isRequired,
  /** Can be `'default'` (default, plain avatar), `'status'` (online/offline indicator) or `'social'` (has social network icon from the `network` prop). */
  type: PropTypes.oneOf(['default', 'social', 'status']),
  /** Can be `'small'`, `'medium'` or `'large'` (`32px`, `40px` and `48px` respectively). */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /** Makes the status indictor green when `true`. Only applicable when `{ type: 'status' }` */
  isOnline: PropTypes.bool,
  /** Name of social network icon to overlay. (E.g., `'instagram'`). Only applicable when `{ type: 'social' }` */
  network: PropTypes.oneOf(['facebook', 'twitter', 'instagram', 'linkedin', 'google']),
};

Avatar.defaultProps = {
  type: 'default',
  size: 'small',
  isOnline: false,
  network: null,
};

export default Avatar;
