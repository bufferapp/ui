import React from 'react';
import Select from '@bufferapp/ui/Select';

/** With Item Tooltip */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => true}
      label="Click me"
      type="primary"
      items={[
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending', tooltip: 'Pending item tooltip' },
        { id: '3', title: 'Closed' },
      ]}
      position="right"
      hideSearch
    />
  );
}
