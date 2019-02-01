import React from 'react';
import Input from '@bufferapp/ui/Input';

/** Input with value */
export default function ExampleInput() {
  return (
    <Input
      onChange={()=>{}}
      name='foo'
      placeholder='placeholder text'
      value='This is an input with a value'
    />
  );
}
