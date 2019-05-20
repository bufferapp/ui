import React from 'react';
import Sidebar from '@bufferapp/ui/Sidebar';
import { Person } from '@bufferapp/ui/Icon';

/** Sidebar Example */
export default function ExampleSidebar() {
  const mock = [
    {
      _id: '1',
      title: 'Folders',
      items: [
        {
          _id: '1a',
          title: 'Inbox',
          icon: <Person color="white" />,
          onItemClick: () => console.info('Inbox Clicked'),
        },
        {
          _id: '1b',
          title: 'Spam',
          icon: <Person color="white" />,
          onItemClick: () => console.info('Spam Clicked'),
        },
        {
          _id: '1c',
          title: 'Assigned',
          color: 'red',
          component: item =>
            `<div style="background: ${
              item.color
            }; width: 10px; height: 10px"/>`,
          onItemClick: () => console.info('Assigned Clicked'),
        },
      ],
    },
    {
      _id: '2',
      title: 'Tags',
      items: [
        { _id: '2a', title: 'My Tag' },
        { _id: '2b', title: 'My Other Tag' },
        { _id: '2c', title: 'My Third Tag' },
      ],
    },
  ];
  return <Sidebar menuItems={mock} />;
}
