import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Avatar' or its c... Remove this comment to see the full error message
import Avatar from '@bufferapp/ui/Avatar'

/** With Social Network Icon */
export default function ExampleAvatar() {
  return (
    <Avatar
      src="http://i.pravatar.cc/64?img=60"
      alt="Hamish"
      size="large"
      type="social"
      network="startPage"
    />
  )
}
