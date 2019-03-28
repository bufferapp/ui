import React from 'react';
import Select from '@bufferapp/ui/Select';

/** Basic */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Click Me"
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[
        {
          _id: '1',
          name: 'OpenOpenOpenOpenOpenOpenOpenOpenOpen',
          hotKeyPrompt: 'Q',
          disabled: true,
        },
        { _id: '2', name: 'Pending' },
        { _id: '3', name: 'Closed' },
        { _id: '4', name: 'Open' },
        { _id: '5', name: 'Pending' },
        { _id: '6', name: 'Closed' },
        { _id: '7', name: 'Open' },
        { _id: '8', name: 'Pending' },
        { _id: '9', name: 'Closed' },
        { _id: '10', name: 'Open' },
        { _id: '11', name: 'Pending' },
        { _id: '23', name: 'Closed' },
        { _id: '21', name: 'Open' },
        { _id: '22', name: 'Pending' },
        { _id: '33', name: 'Closed' },
        { _id: '41', name: 'Open' },
        { _id: '52', name: 'Pending' },
        { _id: '63', name: 'Closed' },
      ]}
      hotKeys={[
        {
          hotKey: 81,
          onKeyPress: () => {
            console.info('hey');
          },
        },
        {
          hotKey: 87,
          onKeyPress: () => {
            console.info('hello there');
          },
        },
      ]}
      hasCustomAction
      onCustomItemClick={string => console.info(string)}
      customItemLabel="Create Tag"
    />
  );
}
