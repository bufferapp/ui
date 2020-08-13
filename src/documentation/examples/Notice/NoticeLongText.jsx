import React from 'react';
import Notice from '@bufferapp/ui/Notice';

/** Notice Long Text */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line
    <Notice dismiss={() => console.log('dismissed!')} type="warning">
      We&apos;re aware of an issue and we&apos;re actively working to resolve
      the situation. Thanks for your patience, you&apos;re honeslty the very
      best and this message is so long!
    </Notice>
  );
}
