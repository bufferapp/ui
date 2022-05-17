import React from 'react';
import Button from '@bufferapp/ui/Button';

/** Split Button (small) */
export default function ExampleSplitButtonSmall() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      size="small"
      type="primary"
      isSplit
      items={[
        { id: '1', title: 'Reply + Pending' },
        { id: '2', title: 'Reply + Close + Assign To Me' },
      ]}
      label="Click Me"
    />
  );
}
