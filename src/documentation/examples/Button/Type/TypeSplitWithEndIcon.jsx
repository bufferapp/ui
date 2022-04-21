import React from 'react';
import Button from '@bufferapp/ui/Button';
import { PaywallTag } from '@bufferapp/ui/Icon';

/** Split Button With End Icon */
export default function ExampleSplitButton() {
  return (
    <Button
      onSelectClick={() => true}
      onClick={() => true}
      type="secondary"
      isSplit
      items={[
        { id: '1', title: 'Save as Draft' },
        { id: '2', title: 'Request Approval', icon: <PaywallTag />, iconEnd: true },
      ]}
      label="Click Me"
    />
  );
}
