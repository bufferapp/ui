import React, { useRef } from 'react';
import Input from '@bufferapp/ui/Input';

/** Input with exposed ref */
export default function ExampleInput() {
  const inputRef = useRef(null);
  return (
    <React.Fragment>
      <Input
        onChange={() => {}}
        name="foo"
        ref={inputRef}
      />
      <button type="button" onClick={() => inputRef.current.focus()}>
        Focus input
      </button>
    </React.Fragment>
  );
}
