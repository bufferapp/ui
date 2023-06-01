import React from 'react'
import Button from '@bufferapp/ui/Button'

/** Split Button Disabled */
export default function ExampleSplitButtonDisabled() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      label="Reply + Close"
      type="primary"
      disabled
      isSplit
      items={[
        { id: '1', title: 'Reply + Pending' },
        { id: '2', title: 'Reply + Close + Assign To Me' },
      ]}
    />
  )
}
