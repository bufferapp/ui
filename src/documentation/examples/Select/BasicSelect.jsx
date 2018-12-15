import React from 'react';
import Select from '@bufferapp/ui/Select';


/** Basic Select */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Click Me"
      items={[
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
      ]}
    />
  );
}
