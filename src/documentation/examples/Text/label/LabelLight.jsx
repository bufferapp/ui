import React from 'react';
import Text from '@bufferapp/ui/Text';

/** Label (light color) */
export default function ExampleText() {
  return (
    <Text
      htmlFor="foo"
      type='label'
      light
    >
      This is a light colored Label
    </Text>
  );
}
