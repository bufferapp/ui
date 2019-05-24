import React from 'react';
import ListItem from '@bufferapp/ui/ListItem';
import { Person } from '@bufferapp/ui/Icon';

/** ListItem Example */
export default function ExampleListItem() {
  const mock = {
    _id: '1a',
    title: 'Label Default',
    icon: <Person color="gray" />,
    onItemClick: item => console.info(item.title),
    badges: 123,
  };
  return <ListItem item={mock} />;
}
