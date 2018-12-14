import React from 'react';
import Select from '@bufferapp/ui/Select';
import { Flag } from '@bufferapp/ui/Icon';


/** Select with Search */
export default function ExampleSelectWithSearch() {
  return (
    <Select
      onSelectClick={() => true}
      hasSearch
      label="Click Me"
      icon={<Flag type="primary" />}
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
