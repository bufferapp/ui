import React from 'react';
import Select from '@bufferapp/ui/Select';
import { Person } from '@bufferapp/ui/Icon';


/** Basic Select */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => true}
      hasSearch
      label="Click Me"
      icon={<Person type="primary" />}
      onSearchChange={() => true}
      type="primary"
      items={[
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
      ]}
    />
  );
}
