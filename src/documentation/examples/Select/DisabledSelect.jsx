import React from 'react';
import Select from '@bufferapp/ui/Select';


/** Basic Disabled */
export default function ExampleSelectDisabled() {
  return (
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Click Me"
      disabled
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[
        { _id: '1', name: 'Open' },
        { _id: '2', name: 'Pending' },
        { _id: '3', name: 'Closed' },
      ]}
    />
  );
}
