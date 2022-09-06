import React from 'react';
import Select from '@bufferapp/ui/Select';
import Person from '@bufferapp/ui/Icons/Person';
import People from '@bufferapp/ui/Icons/People';
import Gear from '@bufferapp/ui/Icons/Gear';
import ArrowLeft from '@bufferapp/ui/Icons/ArrowLeft';
import { NavBarMenu } from '@bufferapp/ui/NavBar';

/** With Custom Component and Custom Items */
export default function ExampleSelectMenu() {
  return (
    <Select
      onSelectClick={selectedItem => selectedItem.selectedItemClick()}
      customButton={onButtonClick => (
        <NavBarMenu
          user={{
            name: 'Courtney Seiter',
            email: 'courtney@buffer.com',
          }}
          onClick={onButtonClick}
        />
      )}
      items={[
        {
          id: '1',
          title: 'Account',
          icon: <Person color="gray" />,
          selectedItemClick: () => console.info('Account Clicked'),
        },
        {
          id: '2',
          title: 'Organization',
          icon: <People color="gray" />,
          selectedItemClick: () => console.info('Organization Clicked'),
        },
        {
          id: '3',
          title: 'Settings',
          icon: <Gear color="gray" />,
          selectedItemClick: () => console.info('Settings Clicked'),
        },
        {
          id: '4',
          title: 'Logout',
          icon: <ArrowLeft color="gray" />,
          hasDivider: true,
          selectedItemClick: () => console.info('Logout Clicked'),
        },
        {
          id: '5',
          title: 'Logout',
          icon: <ArrowLeft color="gray" />,
          hasDivider: true,
          dividerTitle: 'Logout',
          selectedItemClick: () => console.info('Logout Clicked'),
        },
      ]}
      marginTop="32px"
      hideSearch
    />
  );
}
