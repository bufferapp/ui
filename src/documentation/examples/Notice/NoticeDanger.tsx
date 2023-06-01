import React from 'react'
import Notice from '@bufferapp/ui/Notice'
import Text from '@bufferapp/ui/Text'

/** Notice Danger Example */
export default function ExampleNotice() {
  return (
    // eslint-disable-next-line
    <Notice type="alert">
      <Text>
        We&apos;re aware of an issue and we&apos;re actively working to resolve
        the situation
      </Text>
    </Notice>
  )
}
