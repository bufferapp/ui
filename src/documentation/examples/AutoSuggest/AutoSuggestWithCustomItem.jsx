import React from 'react';
import AutoSuggest from '@bufferapp/ui/AutoSuggest';

/** Custom Item */
export default function ExampleAutoSuggestWithCustomItem() {
  return (
    <AutoSuggest
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
