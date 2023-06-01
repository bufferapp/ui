import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tooltip' or its ... Remove this comment to see the full error message
import Tooltip from '@bufferapp/ui/Tooltip'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Avatar' or its c... Remove this comment to see the full error message
import Avatar from '@bufferapp/ui/Avatar' // eslint-disable-line

/** With Hotkey */
export default function ExampleTooltip() {
  return (
    <Tooltip
      label="My Tooltip Label with multiple lines. Adding up an example here with a long tooltip text."
      position="bottom"
      hotkey="⌘+C"
    >
      <Avatar
        src="https://s3.amazonaws.com/buffer-ui/Default+Avatar.png"
        alt="@joelgascoigne"
        size="medium"
      />
    </Tooltip>
  )
}
