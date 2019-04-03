import React from 'react';
import Sidebar from '@bufferapp/ui/Sidebar';

/** Sidebar Example */
export default function ExampleSidebar() {
  const mock = [
    {
      _id: '1',
      title: 'Folders',
      items: [
        { _id: '1a', title: 'Inbox' },
        { _id: '1b', title: 'Spam' },
        { _id: '1c', title: 'Assigned' },
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
