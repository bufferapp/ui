import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';
import  Person  from '@bufferapp/ui/Icons/Person';

/** SidebarListItem Example */
export default function ExampleSidebarListItem() {
  return (
    <SidebarListItem
      id="1a"
      title="Label Default"
      icon={<Person />}
      onItemClick={() => console.info('hey')}
      badges={123}
    />
  );
}
