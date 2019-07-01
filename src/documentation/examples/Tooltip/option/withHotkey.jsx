import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Button from '@bufferapp/ui/Button';

/** With Hotkey */
export default function ExampleTooltip() {
  return (
    <Tooltip label="Tooltip example" position="bottom" hotkey="⌘+C">
      <Button type="primary" onClick={() => {}} label="Click Me" fullWidth />
    </Tooltip>
  )
}
