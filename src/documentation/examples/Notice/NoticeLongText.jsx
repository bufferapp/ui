import React from 'react'
import Notice from '@bufferapp/ui/Notice'
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
