import React from 'react';
import Text from '@bufferapp/ui/Text';

/** Label (color) */
export default function ExampleText() {
  return (
    <Text
      htmlFor="foo"
      type='label'
      color='gray'
    >
      This is a colored Label
    </Text>
  );
}
