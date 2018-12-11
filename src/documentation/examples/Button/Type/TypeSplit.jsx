import React from 'react';
import Button from '@bufferapp/ui/Button';

/** Split Button with Select */
export default function ExampleSelect() {
  return (
    <Button
      onSelectClick={() => true}
      type="primary"
      isSplit
      items={[{ id: 1, title: 'Reply + Pending' },
        { id: 2, title: 'Reply + Close + Assign To Me' }]}
      label="Click Me"
    />
  );
}
