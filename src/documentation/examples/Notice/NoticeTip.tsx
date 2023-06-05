import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Notice' or its c... Remove this comment to see the full error message
import Notice from '@bufferapp/ui/Notice'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'

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
  )
}
