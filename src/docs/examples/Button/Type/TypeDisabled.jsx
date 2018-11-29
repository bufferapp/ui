import React from 'react';
import Button from '@bufferapp/components/Button';

/** Disabled Button */
export default function ExampleTypePrimaryDisabled() {
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
