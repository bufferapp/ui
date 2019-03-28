import React from 'react';
import Select from '@bufferapp/ui/Select';

/** Custom Item */
export default function ExampleSelectWithCustomItem() {
  return (
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Click Me"
      items={[
        {
          id: '1',
          title: 'Red',
          color: 'red',
          component: item =>
            `<div style="background: ${
              item.color
            }; width: 10px; height: 10px"/>`,
          onItemClick: () => console.info('Account Clicked'),
        },
        {
          id: '2',
          title: 'Green',
          color: 'green',
          component: item =>
            `<div style="background: ${
              item.color
            }; width: 10px; height: 10px"/>`,
          onItemClick: () => console.info('Organization Clicked'),
        },
        {
          id: '3',
          title: 'Blue',
          color: 'blue',
          component: item =>
            `<div style="background: ${
              item.color
            }; width: 10px; height: 10px"/>`,
          onItemClick: () => console.info('Settings Clicked'),
        },
      ]}
      hideSearch
    />
  );
}
