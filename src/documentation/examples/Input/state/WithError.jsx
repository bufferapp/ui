import React from 'react'
import Input from '@bufferapp/ui/Input'

/** Input with error */
export default function ExampleInput() {
  return (
    <Input
      type="input"
      onChange={() => {}}
      name="foo"
      placeholder="placeholder text"
      hasError
      value="this is an input with an error"
    />
  )
}
