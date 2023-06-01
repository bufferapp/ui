import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Link' or its cor... Remove this comment to see the full error message
import Link from '@bufferapp/ui/Link'

/** Link */
export default function ExampleLink() {
  return (
    <Link newTab href="http://buffer.com">
      This is a link
    </Link>
  )
}
