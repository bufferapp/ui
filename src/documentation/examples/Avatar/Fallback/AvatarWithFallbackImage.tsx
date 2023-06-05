import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Avatar' or its c... Remove this comment to see the full error message
import Avatar from '@bufferapp/ui/Avatar'

/** With Fallback Icon */
export default function ExampleAvatar() {
  return (
    <Avatar
      src="https://broken-image-url"
      fallbackUrl="https://s3.amazonaws.com/buffer-ui/Default+Avatar.png"
      alt="Example"
      size="large"
      type="social"
      network="instagram"
    />
  )
}
