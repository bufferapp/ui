import React, { useState } from 'react';
import Select from '@bufferapp/ui/Select';
import { Flag } from '@bufferapp/ui/Icon';

const data = [
  { _id: '1', name: 'First', selected: true },
  { _id: '2', name: 'Second', selected: true },
  { _id: '3', name: 'Third', selected: true },
  { _id: '4', name: 'Fourth', selected: true },
  { _id: '5', name: 'Fifth', selected: true },
];

/** With Select All option */
export default function ExampleSelectWithSelectAll() {
  const [items, setItems] = useState(data);

  const handleClick = (option) => {
    // If 'All' item is clicked, either select or deselect all items
    if (option.name === 'All') {
      const newSelectedValue = !items.every(item => item.selected === true);
      setItems(items.map(item => ({ ...item, selected: newSelectedValue })));

    } else { // If any other item is clicked, either select or deselect only that item
      setItems(items.map(item => {
        if (item._id === option._id) return { ...item, selected: !item.selected };
        return item;
      }));
    }
  };

  // Create the 'All' item and determine whether it should be marked as selected or not
  const allItemsOption = {
    _id: '0', name: 'All', selected: items.every(item => item.selected === true),
  };

  return (
    <Select
      onSelectClick={item => handleClick(item)}
      label='Try Select All'
      icon={<Flag color='white' />}
      type='primary'
      // hideSearch
      multiSelect
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[ allItemsOption, ...items ]}
    />
  );
}
