import React from 'react'
import Tooltip from '@bufferapp/ui/Tooltip'
import Avatar from '@bufferapp/ui/Avatar' // eslint-disable-line

/** Not visible */
export default function ExampleTooltip() {
  return (
    <Tooltip>
      <Avatar
        src="https://s3.amazonaws.com/buffer-ui/Default+Avatar.png"
        alt="@joelgascoigne"
        size="medium"
      />
    </Tooltip>
  )
}
