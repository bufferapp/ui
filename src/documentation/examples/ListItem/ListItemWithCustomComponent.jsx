import React from 'react';
import ListItem from '@bufferapp/ui/ListItem';

/** ListItem With Custom Component Example */
export default function ExampleListItem() {
  return (
    <ListItem
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
