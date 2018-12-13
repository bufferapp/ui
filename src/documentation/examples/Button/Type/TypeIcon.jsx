import React from 'react';
import Button from '@bufferapp/ui/Button';
import { Folder } from '@bufferapp/ui/Icon';

/** Secondary Button With Icon */
export default function ExampleButton() {
  return (
    <Button
      type="secondary"
      icon={<Folder />}
      hasIconOnly
      onClick={() => {}}
      label="Click Me"
    />
  );
}
