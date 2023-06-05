import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Avatar' or its c... Remove this comment to see the full error message
import Avatar from '@bufferapp/ui/Avatar'

/** Large */
export default function ExampleAvatar() {
  return (
    <Avatar
      src="https://pbs.twimg.com/profile_images/1212260099604897792/OU6OulZj_400x400.jpg"
      alt="@joelgascoigne"
      size="large"
    />
  )
}
