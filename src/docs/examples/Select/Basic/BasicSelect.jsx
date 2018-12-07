import React from 'react';
import Button from '@bufferapp/ui/Button';

/** Split Button with Select */
export default function ExampleSelect() {
  return (
    <Button
      onClick={() => true}
      label="Select"
      type="primary"
      isSplit="true"
      items={[{
        id: 1, name: 'Reply and Close',
      },
      {
        id: 2, name: 'Reply and Assign',
      }]}
    >
      Primary
    </Button>
  );
}
