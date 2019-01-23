import React from 'react';
import Select from '@bufferapp/ui/Select';
import { Flag } from '@bufferapp/ui/Icon';


/** With Search */
export default function ExampleSelectWithSearch() {
  return (
    <Select
      onSelectClick={item => console.info(item)}
      hasSearch
      label="Search Me"
      icon={<Flag color="white" />}
      onSearchChange={() => true}
      type="primary"
      disabled
      searchPlaceholder="Search items..."
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
