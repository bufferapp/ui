import React from 'react';
import ListItem from '@bufferapp/ui/ListItem';
import { Person } from '@bufferapp/ui/Icon';

/** ListItem Selected Example */
export default function ExampleListItem() {
  const mock = {
    _id: '1a',
    title:
      'Label DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel DefaultLabel Default',
    icon: <Person color="gray" />,
    onItemClick: item => console.info(item.title),
    badges: 123,
    selected: true,
  };
  return <ListItem item={mock} />;
}
