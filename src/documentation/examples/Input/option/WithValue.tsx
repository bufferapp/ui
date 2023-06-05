import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Input' or its co... Remove this comment to see the full error message
import Input from '@bufferapp/ui/Input'

/** Input with value */
export default function ExampleInput() {
  return (
    <Input
      onChange={() => {}}
      name="foo"
      placeholder="placeholder text"
      value="This is an input with a value"
    />
  )
}
