import React from 'react';
import Button from '@bufferapp/ui/Button';
import { Message } from '@bufferapp/ui/Icon';

/** Submit with Icon */
export default function ExampleButton() {
  return (
    <Button
      display="submit"
      icon={<Message color="white" />}
      onClick={() => {}}
      label="Click Me"
    />
  );
}
