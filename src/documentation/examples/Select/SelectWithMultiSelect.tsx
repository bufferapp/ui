import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'

/** Multi-Select */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Click Me"
      multiSelect
      items={[
        { id: '1', title: 'Open', selected: true },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
      ]}
      hideSearch
    />
  )
}
