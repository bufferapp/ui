import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Tooltip' or its ... Remove this comment to see the full error message
import Tooltip from '@bufferapp/ui/Tooltip'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'

/** Left Aligned */
export default function ExampleTooltip() {
  return (
    <Tooltip label="My Tooltip Label 🙌" position="left">
      <Button type="primary" onClick={() => {}} label="Click Me" fullWidth />
    </Tooltip>
  )
}
