import React from 'react';
import AppShell from '@bufferapp/ui/AppShell';
import {
  Person, People, Gear, ArrowLeft, Flag,
} from '@bufferapp/ui/Icon';

import { gray } from '@bufferapp/ui/style/colors';

const userMenuItems = [
  {
    id: '1',
    title: 'Account',
    component: <Person color={gray} />,
    onItemClick: () => {},
  },
  {
    id: '2',
    title: 'Apps & Extras',
    component: <Gear color={gray} />,
    onItemClick: () => console.info('Organization Clicked'),
  },
  {
    id: '3',
    title: 'Billing',
    component: <People color={gray} />,
    onItemClick: () => console.info('Settings Clicked'),
  },
  {
    id: '4',
    title: 'Upgrade to Pro',
    component: <Flag color={gray} />,
    hasDivider: true,
    onItemClick: () => console.info('Logout Clicked'),
  },
  {
    id: '5',
    title: 'Logout',
    component: <ArrowLeft color={gray} />,
    hasDivider: true,
    onItemClick: () => console.info('Logout Clicked'),
  },
];

/** AppShell Example */
export default function ExampleAppShell() {
  return (
    <AppShell
      user={{
        name: 'Hamish Macpherson',
        email: 'hamstu@gmail.com',
        avatar: 'https://pbs.twimg.com/profile_images/847849987841167360/WEVTxvUA_400x400.jpg',
        menuItems: userMenuItems,
      }}
      sidebar={() => <div>Sidebar</div>}
      content={() => <div>Main content.</div>}
    />
  );
}
