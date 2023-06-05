import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Text' or its cor... Remove this comment to see the full error message
import Text from '@bufferapp/ui/Text'

/** Label (color) */
export default function ExampleText() {
  return (
    <Text htmlFor="foo" type="label" color="gray">
      This is a colored Label
    </Text>
  )
}
