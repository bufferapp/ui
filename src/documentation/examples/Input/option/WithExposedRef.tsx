import React, { useRef } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Input' or its co... Remove this comment to see the full error message
import Input from '@bufferapp/ui/Input'

/** Input with exposed ref */
export default function ExampleInput() {
  const inputRef = useRef(null)
  return (
    <React.Fragment>
      <Input onChange={() => {}} name="foo" ref={inputRef} />
      {/* @ts-expect-error TS(2531) FIXME: Object is possibly 'null'. */}
      <button type="button" onClick={() => inputRef.current.focus()}>
        Focus input
      </button>
    </React.Fragment>
  )
}
