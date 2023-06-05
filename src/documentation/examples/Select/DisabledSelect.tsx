import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'

/** Basic Disabled */
export default function ExampleSelectDisabled() {
  return (
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Click Me"
      disabled
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[
        { _id: '1', name: 'Open' },
        { _id: '2', name: 'Pending' },
        { _id: '3', name: 'Closed' },
      ]}
    />
  )
}
