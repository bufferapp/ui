import React from 'react';
import Button from '@bufferapp/ui/Button';
import { Message } from '@bufferapp/ui/Icon';

/** Primary with Icon */
export default function ExampleButton() {
  return (
    <Button
      display="primary"
      icon={<Message color="white" />}
      onClick={() => {}}
      label="Click Me"
    />
  );
}
