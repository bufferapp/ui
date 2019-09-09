import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';

/** TextArea Disabled Example */
export default function ExampleTextArea() {
  return (
    <TextArea label='Textarea (Disabled)' placeholder='ghosts and stuff' onChange={()=>{}} value="hello, world!" disabled id="example2" />
  );
}