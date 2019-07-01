import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Button from '@bufferapp/ui/Button';

/** Multiline */
export default function ExampleTooltip() {
  return (
    <Tooltip label="My Tooltip Label with multiple lines. Adding up an example here with a long tooltip text." position="bottom">
      <Button type="primary" onClick={() => {}} label="Click Me" fullWidth />
    </Tooltip>
  )
}
