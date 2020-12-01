import React from 'react';
import Link from '@bufferapp/ui/Link';

/** Link with bolder weight */
export default function ExampleLink() {
  return (
    <Link newTab href="http://buffer.com" fontWeight={700}>This is a link</Link>
  );
}
