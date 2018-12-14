import React from 'react';
import Select from '@bufferapp/ui/Select';
import {
  Person, People, Gear, ArrowLeft,
} from '@bufferapp/ui/Icon';


/** Basic Select */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => true}
      label="Open Me"
      icon={<Person color="white" />}
      type="primary"
      items={[
        { id: '1', title: 'Account', component: <Person color="gray" /> },
        { id: '2', title: 'Organization', component: <People color="gray" /> },
        { id: '3', title: 'Settings', component: <Gear color="gray" /> },
        {
          id: '3', title: 'Logout', component: <ArrowLeft color="gray" />, hasDivider: true,
        },
      ]}
    />
  );
}
