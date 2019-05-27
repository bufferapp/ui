import React from 'react';
import ListItem from '@bufferapp/ui/ListItem';

/** ListItem With User Selected Example */
export default function ExampleListItem() {
  const userMock = {
    id: 'W_Lvu75KcgABAT6L',
    name: 'Joel Gascoigne',
    handle: '@joelgascogine',
    profileImageUrl: 'http://i.pravatar.cc/64?img=60',
    network: 'instagram',
  };

  return (
    <ListItem
      id="1a"
      title="Label Default"
      onItemClick={() => console.info('hey')}
      badges={123}
      user={userMock}
      selected
    />
  );
}
