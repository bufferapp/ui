import React from 'react';
import Button from '@bufferapp/ui/Button';
import { Message } from '@bufferapp/ui/Icon';

/** Primary Button With Icon */
export default function ExampleButton() {
  return (
    <Button
      type="primary"
      icon={<Message type="primary" />}
      onClick={() => {}}
      label="Click Me"
    />
  );
}
