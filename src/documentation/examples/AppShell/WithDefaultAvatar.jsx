import React from 'react';
import AppShell from '@bufferapp/ui/AppShell';

const userMenuItems = [];

const helpMenuItems = [
  {
    id: '1',
    title: 'FAQ',
    onItemClick: () => {},
  },
  {
    id: '2',
    title: 'Status',
    onItemClick: () => {},
  },
  {
    id: '3',
    title: 'Pricing & Plans',
    onItemClick: () => {},
  },
  {
    id: '4',
    title: 'Wishlist',
    onItemClick: () => {},
  },
];

/** AppShell With default avatar */
export default function ExampleAppShell() {
  return (
    <AppShell
      activeProduct="publish"
      user={{
        name: 'Hamish Macpherson',
        email: 'hamstu@gmail.com',
        menuItems: userMenuItems,
        ignoreMenuItems: ['account'],
      }}
      helpMenuItems={helpMenuItems}
      content={<div>Main content.</div>}
    />
  );
}
