import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/TextArea' or its... Remove this comment to see the full error message
import TextArea from '@bufferapp/ui/TextArea'

/** TextArea With Error Example */
export default function ExampleTextArea() {
  return (
    <TextArea
      label="Textarea (Error)"
      placeholder="placeholder"
      onChange={() => {}}
      hasError
      help="nope"
      id="example3"
      value="this is a textarea with an error"
    />
  )
}
