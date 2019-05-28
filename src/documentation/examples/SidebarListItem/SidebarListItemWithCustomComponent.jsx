import React from 'react';
import SidebarListItem from '@bufferapp/ui/SidebarListItem';

/** SidebarListItem With Custom Component Example */
export default function ExampleSidebarListItem() {
  return (
    <SidebarListItem
      id="1a"
      title="Label Default"
      icon={(
        <div
          style={{
            background: 'red',
            width: '16px',
            height: '16px',
            borderRadius: '4px',
          }}
        />
)}
      onItemClick={() => console.info('hey')}
      badges={123}
    />
  );
}
