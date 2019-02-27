import React from 'react';
import Button from '@bufferapp/ui/Button';

/** Disabled */
export default function ExampleDisabled() {
  return (
    <Button
      display="primary"
      disabled
      onClick={() => {}}
      label="Click Me"
    />
  );
}
