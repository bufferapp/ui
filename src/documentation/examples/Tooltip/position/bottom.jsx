import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Button from '@bufferapp/ui/Button';

/** Bottom Aligned */
export default function ExampleTooltip() {
  return (
    <Tooltip label="My Tooltip Label 🙌" position="bottom">
      <Button type="primary" onClick={() => {}} label="Click Me" fullWidth />
    </Tooltip>
  )
}
