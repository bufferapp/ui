import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'

/** Large */
export default function ExampleSizeLarge() {
  return (
    <Button type="primary" size="large" onClick={() => {}} label="Click Me" />
  )
}
