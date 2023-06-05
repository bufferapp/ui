import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'

/** Without Capitalize */
export default function ExampleWithoutCapitalize() {
  return (
    <Select
      onSelectClick={() => true}
      label="Click me"
      type="primary"
      items={[
        { id: '1', title: 'hamish' },
        { id: '2', title: 'juliana' },
        { id: '3', title: 'joel' },
      ]}
      position="right"
      hideSearch
      capitalizeItemLabel={false}
    />
  )
}
