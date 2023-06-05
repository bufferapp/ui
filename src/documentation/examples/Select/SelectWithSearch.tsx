import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { Flag } from '@bufferapp/ui/Icon'

/** With Search */
export default function ExampleSelectWithSearch() {
  return (
    <Select
      // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
      onSelectClick={(item) => console.info(item)}
      label="Search Me"
      icon={<Flag color="white" />}
      onSearchChange={() => true}
      type="primary"
      searchPlaceholder="Search items..."
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[
        { _id: '1', name: 'Open' },
        { _id: '2', name: 'Pending' },
        { _id: '3', name: 'Closed' },
        { _id: '4', name: 'Open' },
        { _id: '5', name: 'Pending' },
        { _id: '6', name: 'Closed' },
      ]}
    />
  )
}
