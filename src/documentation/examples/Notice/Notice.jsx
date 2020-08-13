import React from 'react';
import Notice from '@bufferapp/ui/Notice';

/** Notice Example */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line 
    <Notice dismiss={() => console.log('dismissed!')}>
      Hello, world!
    </Notice>
  );
}
