import React from 'react'
import Text from '@bufferapp/ui/Text'

/** Help with error */
export default function ExampleText() {
  return (
    <Text htmlFor="foo" type="help" hasError>
      This is a help with error Label
    </Text>
  )
}
