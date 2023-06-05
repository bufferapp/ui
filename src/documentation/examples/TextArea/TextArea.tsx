import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/TextArea' or its... Remove this comment to see the full error message
import TextArea from '@bufferapp/ui/TextArea'

/** TextArea Example */
export default function ExampleTextArea() {
  return (
    <TextArea
      label="Textarea (Normal)"
      placeholder="placeholder"
      onChange={() => {}}
      id="example1"
    />
  )
}
