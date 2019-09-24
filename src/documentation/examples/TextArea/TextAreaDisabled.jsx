import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';

/** TextArea Disabled Example */
export default function ExampleTextArea() {
  return (
    <TextArea label='Textarea (Disabled)' placeholder='placeholder' onChange={()=>{}} value="hello, world!" disabled id="example2" />
  );
}