import React from 'react';
import Notice from '@bufferapp/ui/Notice';

/** Notice Dismissable */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line 
    <Notice dismiss={() => console.log('dismissed!')} type="note">
      We&apos;re aware of an issue and we&apos;re actively working to resolve the situation
    </Notice>
  );
}