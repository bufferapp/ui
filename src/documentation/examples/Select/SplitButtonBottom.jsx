import React from 'react';
import Button from '@bufferapp/ui/Button';

/** Split Button with Select on Bottom */
export default function ExampleSplitButtonBottom() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      label="Reply + Close"
      type="primary"
      isSplit
      items={[
        { id: '1', title: 'Reply + Pending1' },
        { id: '2', title: 'Reply + Close + Assign To Me' },
      ]}
      hideSearch
    />
  );
}
