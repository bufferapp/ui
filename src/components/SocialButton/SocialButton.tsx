import React from 'react'
import PropTypes from 'prop-types'
import { Twitter, Instagram, Facebook, Pinterest, LinkedIn } from '../Icon'
import Text from '../Text/Text'

import { ChannelIconContainerStyled, SocialButtonStyled } from './style'

// @ts-expect-error TS(7006) FIXME: Parameter 'channel' implicitly has an 'any' type.
const renderContent = (channel) => {
  const content = {}
  switch (channel) {
    case 'instagram':
      // @ts-expect-error TS(2339) FIXME: Property 'Icon' does not exist on type '{}'.
      content.Icon = <Instagram />
      // @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type '{}'.
      content.name = 'Instagram'
      // @ts-expect-error TS(2339) FIXME: Property 'cta' does not exist on type '{}'.
      content.cta = 'Connect an Instagram business account'
      break
    case 'twitter':
      // @ts-expect-error TS(2339) FIXME: Property 'Icon' does not exist on type '{}'.
      content.Icon = <Twitter />
      // @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type '{}'.
      content.name = 'Twitter'
      // @ts-expect-error TS(2339) FIXME: Property 'cta' does not exist on type '{}'.
      content.cta = 'Connect a Twitter profile'
      break
    case 'facebook':
      // @ts-expect-error TS(2339) FIXME: Property 'Icon' does not exist on type '{}'.
      content.Icon = <Facebook />
      // @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type '{}'.
      content.name = 'Facebook'
      // @ts-expect-error TS(2339) FIXME: Property 'cta' does not exist on type '{}'.
      content.cta = 'Connect a Facebook page'
      break
    case 'pinterest':
      // @ts-expect-error TS(2339) FIXME: Property 'Icon' does not exist on type '{}'.
      content.Icon = <Pinterest />
      // @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type '{}'.
      content.name = 'Pinterest'
      // @ts-expect-error TS(2339) FIXME: Property 'cta' does not exist on type '{}'.
      content.cta = 'Connect a Pinterest profile'
      break
    case 'linkedin':
      // @ts-expect-error TS(2339) FIXME: Property 'Icon' does not exist on type '{}'.
      content.Icon = <LinkedIn />
      // @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type '{}'.
      content.name = 'LinkedIn'
      // @ts-expect-error TS(2339) FIXME: Property 'cta' does not exist on type '{}'.
      content.cta = 'Connect a LinkedIn profile'
      break
    default:
      break
  }
  return content
}

// @ts-expect-error TS(7031) FIXME: Binding element 'disabled' implicitly has an 'any'... Remove this comment to see the full error message
const SocialButton = ({ disabled, channel, onClick }) => {
  const content = renderContent(channel)
  return (
    <SocialButtonStyled
      onClick={!disabled ? onClick : undefined}
      channel={channel}
      disabled={disabled}
    >
      <ChannelIconContainerStyled>
        {/* @ts-expect-error TS(2339) FIXME: Property 'Icon' does not exist on type '{}'. */}
        {content.Icon}
        {/* @ts-expect-error TS(2339) FIXME: Property 'name' does not exist on type '{}'. */}
        <Text type="p">{content.name}</Text>
      </ChannelIconContainerStyled>
      {/* @ts-expect-error TS(2339) FIXME: Property 'cta' does not exist on type '{}'. */}
      <Text type="p">{content.cta}</Text>
    </SocialButtonStyled>
  )
}

SocialButton.propTypes = {
  /** Is the button disabled */
  disabled: PropTypes.bool,
  /** Channel */
  channel: PropTypes.oneOf([
    'twitter',
    'instagram',
    'facebook',
    'pinterest',
    'linkedin',
  ]).isRequired,
  /** OnClick handler */
  onClick: PropTypes.func.isRequired,
}

SocialButton.defaultProps = {
  disabled: false,
}

export default SocialButton
