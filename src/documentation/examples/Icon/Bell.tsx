import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Bell'... Remove this comment to see the full error message
import BellIcon from '@bufferapp/ui/Icon/Icons/Bell'

/** Bell */
export default function BellIconExample() {
  return <BellIcon size="large" />
}
