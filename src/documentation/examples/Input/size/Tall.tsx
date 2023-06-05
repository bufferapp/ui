import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Input' or its co... Remove this comment to see the full error message
import Input from '@bufferapp/ui/Input'

/** Tall input */
export default function ExampleInput() {
  return (
    <Input
      type="input"
      onChange={() => {}}
      name="foo"
      placeholder="placeholder text"
      size="tall"
    />
  )
}
