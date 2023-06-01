import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Notice' or its c... Remove this comment to see the full error message
import Notice from '@bufferapp/ui/Notice'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'

/** Notice Example */
export default function ExampleNotice() {
  return (
    <Notice type="note">
      <Text>
        We&apos;re actively working on improving this feature and would love
        your feedback!
      </Text>
    </Notice>
  )
}
