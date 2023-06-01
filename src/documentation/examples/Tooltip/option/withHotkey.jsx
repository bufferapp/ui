import React from 'react'
import Tooltip from '@bufferapp/ui/Tooltip'
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
