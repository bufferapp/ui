import React from 'react';
import Select from '@bufferapp/ui/Select';
import Person from '@bufferapp/ui/Icon/Icons/Person';

/** With Icon */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => true}
      label="Click Me"
      icon={<Person color="white" />}
      type="primary"
      items={[
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
      ]}
    />
  );
}
