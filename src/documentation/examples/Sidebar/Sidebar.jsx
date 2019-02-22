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
            { label: 'Item 1', url: '/', icon: Person },
            { label: 'Item 2', url: '/' }
          ]
        },
        {
          name: 'Settings 2',
          items: [
            { label: 'Item 3', url: '/' },
            { label: 'Item 4', url: '/' }
          ]
        },
      ]}
    />
  );
}
