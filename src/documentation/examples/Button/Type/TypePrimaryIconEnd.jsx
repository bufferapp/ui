import React from 'react'
import Button from '@bufferapp/ui/Button'
import { MessageFilled } from '@bufferapp/ui/Icon'

/** Primary with Icon */
export default function ExampleButton() {
  return (
    <Button
      type="primary"
      icon={<MessageFilled color="white" />}
      iconEnd
      onClick={() => {}}
      label="Click Me"
    />
  )
}
