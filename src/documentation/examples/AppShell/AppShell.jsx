import React from 'react';
import AppShell from '@bufferapp/ui/AppShell';
import { Gear } from '@bufferapp/ui/Icon';

import { gray } from '@bufferapp/ui/style/colors';

const userMenuItems = [
  {
    id: '2',
    title: 'Preferences',
    icon: <Gear color={gray} />,
    onItemClick: () => console.info('Preferences'),
  },
];

const helpMenuItems = [
  {
    id: '1',
    title: 'FAQ',
    onItemClick: () => console.info('FAQ'),
  },
  {
    id: '2',
    title: 'Status',
    onItemClick: () => console.info('Status'),
  },
  {
    id: '3',
    title: 'Pricing & Plans',
    onItemClick: () => console.info('Pricing'),
  },
  {
    id: '4',
    title: 'Wishlist',
    onItemClick: () => console.info('Wishlist'),
  },
];

const orgSwitcher = {
  title: 'Organizations',
  menuItems: [
    {
      id: '1',
      title: 'My Organization 1',
      selected: false,
      onItemClick: () => console.info('My Organization 1'),
      subItems: [
        {
          id: '1',
          title: '@lunnaflyers',
          network: 'instagram',
        },
        {
          id: '2',
          title: '@lunnasneakers',
          network: 'twitter',
        },
        {
          id: '3',
          title: 'Lunna Sneakers US Page',
          network: 'facebook',
        },
        {
          id: '4',
          title: 'Lunna Sneakers',
          network: 'pinterest',
        },
        {
          id: '5',
          title: 'Lunna Sneakers US',
          network: 'facebook',
        },
        {
          id: '6',
          title: '@lunnastwitter',
          network: 'twitter',
        },
      ],
    },
    {
      id: '2',
      title: 'My Organization Super Long',
      selected: true,
      onItemClick: () => console.info('My Organization 2'),
      subItems: [
        {
          id: '1',
          title: '@bufferinsta',
          network: 'instagram',
        },
        {
          id: '2',
          title: '@buffer',
          network: 'twitter',
        },
      ],
    },
  ],
};

/** AppShell Example */
export default function ExampleAppShell() {
  return (
    <AppShell
      activeProduct="publish"
      user={{
        name: 'Hamish Macpherson',
        email: 'hamstu@gmail.com',
        avatar:
          'https://pbs.twimg.com/profile_images/847849987841167360/WEVTxvUA_400x400.jpg',
        menuItems: userMenuItems,
      }}
      helpMenuItems={helpMenuItems}
      content={<div>Main content.</div>}
      displaySkipLink
      orgSwitcher={orgSwitcher}
    />
  );
}
