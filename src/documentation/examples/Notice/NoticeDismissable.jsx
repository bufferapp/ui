import React from 'react';
import Notice from '@bufferapp/ui/Notice';

/** Notice Dismissable */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line 
    <Notice dismiss={() => console.log('dismissed!')} type="note">
      We&apos;re actively working on improving this feature and would love your
      feedback!
    </Notice>
  );
}