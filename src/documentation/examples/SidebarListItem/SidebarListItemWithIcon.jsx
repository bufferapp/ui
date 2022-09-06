import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';
import  Warning  from '@bufferapp/ui/Icons/Warning';

/** SidebarListItem With Badge Icon Example */
export default function ExampleSidebarListItem() {
  return (
    <SidebarListItem
      id="1a"
      title="Label Default"
      onItemClick={() => console.info('hey')}
      badges={123}
      badgeIcon={<Warning />}
    />
  );
}
