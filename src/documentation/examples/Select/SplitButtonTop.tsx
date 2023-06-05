import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'

/** Split Button with Select on Top */
export default function ExampleSplitButtonTop() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      label="Reply + Close"
      type="primary"
      selectPosition="top"
      isSplit
      items={[
        { id: '1', title: 'Reply + Pending' },
        { id: '2', title: 'Reply + Close + Assign To Me' },
      ]}
    />
  )
}
