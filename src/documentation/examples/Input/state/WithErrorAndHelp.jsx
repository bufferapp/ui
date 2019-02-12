import React from 'react';
import Input from '@bufferapp/ui/Input';

/** Input with error and help text */
export default function ExampleInput() {
  return (
    <Input
      onChange={()=>{}}
      name='foo'
      placeholder="placeholder text"
      help="help text"
      hasError
      value='this is an input with an error'
    />
  );
}
