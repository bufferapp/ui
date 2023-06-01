import React from 'react'
import Notice from '@bufferapp/ui/Notice'
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
