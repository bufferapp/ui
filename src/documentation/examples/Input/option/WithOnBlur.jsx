import React from 'react';
import Input from '@bufferapp/ui/Input';

/** Input with onBlur option */
export default function ExampleInput() {
  return (
    <Input
      type='input'
      onChange={()=>{}}
      onBlur={()=>{}}
      name='foo'
      placeholder='placeholder text'
    />
  );
}
