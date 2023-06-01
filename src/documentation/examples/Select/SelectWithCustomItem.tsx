import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'

/** Custom Item */
export default function ExampleSelectWithCustomItem() {
  return (
    <Select
      // @ts-expect-error TS(7006) FIXME: Parameter 'selectedItem' implicitly has an 'any' t... Remove this comment to see the full error message
      onSelectClick={(selectedItem) => selectedItem.selectedItemClick()}
      label="Click Me"
      items={[
        {
          id: '1',
          title: 'Red',
          color: 'red',
          // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
          component: (item) =>
            `<div style="background: ${item.color}; width: 10px; height: 10px"/>`,
          selectedItemClick: () => console.info('Red Clicked'),
        },
        {
          id: '2',
          title: 'Green',
          color: 'green',
          // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
          component: (item) =>
            `<div style="background: ${item.color}; width: 10px; height: 10px"/>`,
          selectedItemClick: () => console.info('Green Clicked'),
        },
        {
          id: '3',
          title: 'Blue',
          color: 'blue',
          // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
          component: (item) =>
            `<div style="background: ${item.color}; width: 10px; height: 10px"/>`,
          selectedItemClick: () => console.info('Blue Clicked'),
        },
      ]}
      hideSearch
    />
  )
}
