import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';

/** TextArea Example */
export default function ExampleTextArea() {
  return (
    <TextArea label='Textarea (Normal)' placeholder='ghosts and stuff' rows="30">
      Hello, world!
    </TextArea>
  );
}
