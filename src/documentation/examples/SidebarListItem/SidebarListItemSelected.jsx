import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';
import  Person  from '@bufferapp/ui/Icons/Person';

/** SidebarListItem Selected Example */
export default function ExampleSidebarListItem() {
  return (
    <SidebarListItem
      id="1a"
      title="Label Default"
      icon={<Person color="gray" />}
      onItemClick={() => console.info('hey')}
      badges={123}
      selected
    />
  );
}
