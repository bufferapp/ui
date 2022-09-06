import React from 'react';
import Select from '@bufferapp/ui/Select';
import MoreIcon from '@bufferapp/ui/Icons/More';

/** With Icon Only */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => true}
      label="Click me"
      icon={<MoreIcon />}
      type="primary"
      items={[
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
      ]}
      hasIconOnly
      position="right"
      hideSearch
    />
  );
}
