/* eslint-disable */
import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as Styles from './style'
import {
  facebook,
  googlebusiness,
  instagram,
  linkedin,
  pinterest,
  shopify,
  tiktok,
  twitter,
  startpage,
  mastodon,
  youtube,
} from '../style/colors'
import {
  Facebook,
  Gbp,
  Instagram,
  LinkedIn,
  Pinterest,
  Shopify,
  Tiktok,
  Twitter,
  StartPage,
  Mastodon,
  Youtube,
} from '../Icon'

const Wrapper = styled.div`
  ${(props) => Styles.wrapper[props.size]}
`

const Image = styled.div`
  ${(props) => Styles.image[props.type][props.size]}
`

const socialIconMap = new Map([
  [
    'instagram',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={instagram}>
        <Instagram size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'facebook',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={facebook}>
        <Facebook size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'twitter',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={twitter}>
        <Twitter size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'linkedin',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={linkedin}>
        <LinkedIn size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'pinterest',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={pinterest}>
        <Pinterest size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'googlebusiness',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={googlebusiness}>
        <Gbp size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'shopify',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={shopify}>
        <Shopify size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'tiktok',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={tiktok}>
        <Tiktok size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'startPage',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={startpage}>
        <Styles.StartPageIcon>
          <StartPage size="small" color="white" />{' '}
        </Styles.StartPageIcon>
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'mastodon',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={mastodon}>
        <Mastodon size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
  [
    'youtube',
    ({ size }) => (
      <Styles.SocialIconWrapper size={size} bgColor={youtube}>
        <Youtube size="small" color="white" />
      </Styles.SocialIconWrapper>
    ),
  ],
])

const Avatar = ({ src, alt, type, size, network, fallbackUrl }) => {
  const SocialIcon = network && socialIconMap.get(network)
  return (
    <Wrapper size={size}>
      {SocialIcon && <SocialIcon size={size} />}
      <Image
        size={size}
        type={type}
        src={src}
        fallbackUrl={fallbackUrl}
        alt={alt}
      />
    </Wrapper>
  )
}

Avatar.propTypes = {
  /** The source of the avatar image. */
  src: PropTypes.string.isRequired,
  /** The alt text for the avatar image. */
  alt: PropTypes.string.isRequired,
  /** The fallback url for the avatar image. */
  fallbackUrl: PropTypes.string,
  /** Can be `'default'` (default, plain avatar), `'status'` (online/offline indicator) or `'social'` (has social network icon from the `network` prop). */
  type: PropTypes.oneOf(['default', 'social', 'status']),
  /** Can be `'small'`, `'medium'` or `'large'` (`32px`, `40px` and `48px` respectively). */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /** Name of social network icon to overlay. (E.g., `'instagram'`). Only applicable when `{ type: 'social' }` */
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
}

Avatar.defaultProps = {
  type: 'default',
  size: 'small',
  fallbackUrl: '',
  network: null,
}

export default Avatar
