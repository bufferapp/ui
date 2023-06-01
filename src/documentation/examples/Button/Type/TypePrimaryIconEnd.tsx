import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
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
