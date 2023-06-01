import React from 'react'
import Select from '@bufferapp/ui/Select'

/** With Item Tooltip */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => true}
      label="Click me"
      type="primary"
      items={[
        { id: '1', title: 'With tooltip', tooltip: 'Item with tooltip' },
        { id: '2', title: 'Without tooltip' },
      ]}
      position="right"
      hideSearch
    />
  )
}
