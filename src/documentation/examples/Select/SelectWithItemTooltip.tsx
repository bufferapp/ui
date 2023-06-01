import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
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
