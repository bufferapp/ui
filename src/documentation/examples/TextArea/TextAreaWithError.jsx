import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';

/** TextArea With Error Example */
export default function ExampleTextArea() {
  return (
    <TextArea label='Textarea (Error)' placeholder='placeholder' onChange={()=>{}} hasError help="nope" id="example3" />
  );
}