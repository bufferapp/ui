import React from 'react';
import Select from '@bufferapp/ui/Select';
import  Flag  from '@bufferapp/ui/Icons/Flag';

/** With Search */
export default function ExampleSelectWithSearch() {
  return (
    <Select
      onSelectClick={item => console.info(item)}
      label="Search Me"
      icon={<Flag color="white" />}
      onSearchChange={() => true}
      type="primary"
      searchPlaceholder="Search items..."
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[
        { _id: '1', name: 'Open' },
        { _id: '2', name: 'Pending' },
        { _id: '3', name: 'Closed' },
        { _id: '4', name: 'Open' },
        { _id: '5', name: 'Pending' },
        { _id: '6', name: 'Closed' },
      ]}
    />
  );
}
