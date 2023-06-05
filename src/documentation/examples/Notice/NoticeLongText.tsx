import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Notice' or its c... Remove this comment to see the full error message
import Notice from '@bufferapp/ui/Notice'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'

/** Notice Long Text */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line
    <Notice dismiss={() => console.log('dismissed!')} type="warning">
      <Text>
        We&apos;re aware of an issue and we&apos;re actively working to resolve
        the situation. Thanks for your patience, you&apos;re honeslty the very
        best and this message is so long!
      </Text>
    </Notice>
  )
}
