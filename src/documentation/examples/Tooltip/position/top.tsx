import React from 'react'
import Tooltip from '@bufferapp/ui/Tooltip'
import Button from '@bufferapp/ui/Button'

/** Top Aligned */
export default function ExampleTooltip() {
  return (
    <Tooltip label="My Tooltip Label 🙌" position="top">
      <Button type="primary" onClick={() => {}} label="Click Me" fullWidth />
    </Tooltip>
  )
}
