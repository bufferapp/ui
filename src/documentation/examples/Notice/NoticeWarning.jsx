import React from 'react';
import Notice from '@bufferapp/ui/Notice';

/** Notice Warning Example */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line 
    <Notice type="warning">
      We&apos;re aware of an issue and we&apos;re actively working to resolve the situation
    </Notice>
  );
}
