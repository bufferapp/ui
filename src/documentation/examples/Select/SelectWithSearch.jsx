import React from 'react';
import Select from '@bufferapp/ui/Select';
import { Flag } from '@bufferapp/ui/Icon';


/** Select with Search */
export default function ExampleSelectWithSearch() {
  return (
    <Select
      onSelectClick={item => console.info(item)}
      hasSearch
      label="Search Me"
      icon={<Flag color="white" />}
      onSearchChange={() => true}
      type="primary"
      searchPlaceholder="Search items..."
      items={[
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
      ]}
    />
  );
}
