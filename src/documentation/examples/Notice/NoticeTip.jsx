import React from 'react';
import Notice from '@bufferapp/ui/Notice';
import Text from '@bufferapp/ui/Text';

/** Notice Tip Example */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line
    <Notice type="tip">
      <Text>
        There&apos;s a huge upturn in Followers over the last week, try to
        recreate some of that magic!
      </Text>
    </Notice>
  );
}
