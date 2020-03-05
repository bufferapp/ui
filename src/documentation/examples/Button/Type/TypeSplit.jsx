import React from 'react';
import Button from '@bufferapp/ui/Button';

/** Split Button */
export default function ExampleSplitButton() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      type="primary"
      isSplit
      items={[
        { id: '1', title: 'Reply + Pending' },
        { id: '2', title: 'Reply + Close + Assign To Me' },
      ]}
      label="Click Me"
      aria-haspopup
      aria-expanded={false}
    />
  );
}
