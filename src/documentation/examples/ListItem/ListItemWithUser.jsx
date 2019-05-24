import React from 'react';
import ListItem from '@bufferapp/ui/ListItem';

/** ListItem With User Example */
export default function ExampleListItem() {
  const mock = {
    _id: '1c',
    user: {
      id: 'W_Lvu75KcgABAT6L',
      name: 'Joel Gascoigne',
      handle: '@joelgascogine',
      profileImageUrl: 'http://i.pravatar.cc/64?img=60',
    },
    onItemClick: () => console.info('Assigned Clicked'),
    badges: 123,
  };

  return <ListItem item={mock} />;
}
