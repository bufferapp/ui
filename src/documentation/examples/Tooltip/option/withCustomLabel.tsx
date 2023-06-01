import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tooltip' or its ... Remove this comment to see the full error message
import Tooltip from '@bufferapp/ui/Tooltip'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Avatar' or its c... Remove this comment to see the full error message
import Avatar from '@bufferapp/ui/Avatar' // eslint-disable-line

const customLabel = (
  <div>
    <span style={{ color: '#21F32A' }}>0.4%</span>
    <p style={{ display: 'inline' }}> potential reach</p>
  </div>
)

/** With CustomLabel */
export default function ExampleTooltip() {
  return (
    <Tooltip customLabel={customLabel} position="bottom">
      <Avatar
        src="https://s3.amazonaws.com/buffer-ui/Default+Avatar.png"
        alt="@joelgascoigne"
        size="medium"
      />
    </Tooltip>
  )
}
