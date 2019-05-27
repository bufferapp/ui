import React from 'react';
import ListItem from '@bufferapp/ui/ListItem';
import { Person } from '@bufferapp/ui/Icon';

/** ListItem Example */
export default function ExampleListItem() {
  return (
    <ListItem
      id="1a"
      title="Label Default"
      icon={<Person color="gray" />}
      onItemClick={() => console.info('hey')}
      badges={123}
    />
  );
}
