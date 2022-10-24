import React from 'react';
import Select from '@bufferapp/ui/Select';

/** With Item Align to the left */
export default function ExampleSelect() {
  return (
    <div style={{ width: '300px' }}>
      <Select
        hideSearch
        textToLeft
        onSelectClick={() => true}
        fullWidth
        label="Click me"
        type="primary"
        items={[
          { id: '1', title: 'With a very very long text' },
          { id: '2', title: 'Short text' },
        ]}
      />
    </div>
  );
}
