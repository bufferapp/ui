import React from 'react';
import Sidebar from '@bufferapp/ui/Sidebar';
import { Person } from '@bufferapp/ui/Icon';

/** Sidebar example */
export default function ExampleSidebar() {
  return (
    <Sidebar
      sections={[
        {
          name: 'Settings',
          items: [
            { label: 'Item 1', icon: Person },
            { label: 'Item 2' }
          ]
        },
        {
          name: 'Settings 2',
          items: [
            { label: 'Item 3' },
            { label: 'Item 4' }
          ]
        },
      ]}
    />
  );
}
