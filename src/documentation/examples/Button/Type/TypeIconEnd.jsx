import React from 'react'
import Button from '@bufferapp/ui/Button'
import { Folder } from '@bufferapp/ui/Icon'

/** Secondary with Icon at End */
export default function ExampleButton() {
  return (
    <Button
      type="secondary"
      icon={<Folder />}
      iconEnd
      onClick={() => {}}
      label="Click Me"
    />
  )
}
