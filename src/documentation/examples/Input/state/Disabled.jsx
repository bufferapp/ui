import React from 'react';
import Input from '@bufferapp/ui/Input';

/** Input disabled */
export default function ExampleInput() {
  return (
    <Input
      type='input'
      onChange={()=>{}}
      name='foo'
      placeholder='a disabled text input'
      disabled
    />
  );
}
