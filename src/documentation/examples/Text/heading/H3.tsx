import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'

/** H3 Heading */
export default function ExampleText() {
  return <Text type="h3">This is a H3 Heading</Text>
}
