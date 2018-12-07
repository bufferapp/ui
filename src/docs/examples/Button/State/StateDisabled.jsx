import React from 'react';
import Button from '@bufferapp/ui/Button';

/** Disabled */
export default function ExampleDisabled() {
  return (
    <Button
      type="primary"
      disabled
      onClick={() => {}}
    >
      Click Me
    </Button>
  );
}
