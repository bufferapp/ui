import React from 'react';
import Select from '@bufferapp/ui/Select';
import {
  Person, People, Gear, ArrowLeft,
} from '@bufferapp/ui/Icon';


/** Menu Select */
export default function ExampleSelectMenu() {
  return (
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Open Me"
      icon={<Person color="white" />}
      type="primary"
      items={[
        {
          id: '1', title: 'Account', component: <Person color="gray" />, onItemClick: () => console.info('Account Clicked'),
        },
        {
          id: '2', title: 'Organization', component: <People color="gray" />, onItemClick: () => console.info('Organization Clicked'),
        },
        {
          id: '3', title: 'Settings', component: <Gear color="gray" />, onItemClick: () => console.info('Settings Clicked'),
        },
        {
          id: '3', title: 'Logout', component: <ArrowLeft color="gray" />, hasDivider: true, onItemClick: () => console.info('Logout Clicked'),
        },
      ]}
    />
  );
}
