import React from 'react';
import Input from '@bufferapp/ui/Input';

/** Input with prefix text */
export default function ExampleInput() {
  return (
    <Input
      onChange={()=>{}}
      name='foo'
      label='What is your Twitter handle?'
      prefix={{ text: '@', paddingLeft: '25px' }}
    />
  );
}
