import React from 'react'
import Input from '@bufferapp/ui/Input'

/** Small input */
export default function ExampleInput() {
  return (
    <Input
      type="input"
      onChange={() => {}}
      name="foo"
      placeholder="placeholder text"
      size="small"
    />
  )
}
