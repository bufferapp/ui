import React from 'react';
import Input from '@bufferapp/ui/Input';

/** Input with help text */
export default function ExampleInput() {
  return (
    <Input
      onChange={()=>{}}
      name='foo'
      help="this is an help text"
      placeholder="placeholder text"
    />
  );
}
