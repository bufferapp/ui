import React from 'react';
import Button from '@bufferapp/ui/Button';
import  Message  from '@bufferapp/ui/Icons/Message';

/** Primary with Icon */
export default function ExampleButton() {
  return (
    <Button
      type="primary"
      icon={<Message color="white" />}
      iconEnd
      onClick={() => {}}
      label="Click Me"
    />
  );
}
