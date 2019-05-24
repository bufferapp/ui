import React from 'react';
import ListItem from '@bufferapp/ui/ListItem';

/** ListItem With Custom Component Example */
export default function ExampleListItem() {
  const mock = {
    _id: '1c',
    title: 'Label Default',
    color: 'red',
    component: item =>
      `<div style="background: ${
        item.color
      }; width: 16px; height: 16px; border-radius: 4px;"/>`,
    onItemClick: () => console.info('Assigned Clicked'),
    badges: 123,
  };
  return <ListItem item={mock} />;
}
