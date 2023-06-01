import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { Person } from '@bufferapp/ui/Icon'

/** With Icon */
export default function ExampleSelect() {
  return (
    <Select
      onSelectClick={() => true}
      label="Click Me"
      icon={<Person color="white" />}
      type="primary"
      items={[
        { id: '1', title: 'Open' },
        { id: '2', title: 'Pending' },
        { id: '3', title: 'Closed' },
      ]}
    />
  )
}
