import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';

/** TextArea With Error Example */
export default function ExampleTextArea() {
  return (
    <TextArea label='Textarea (Error)' placeholder='ghosts and stuff' onChange={()=>{}} value="hello, world!" hasError help="nope" id="example3" />
  );
}