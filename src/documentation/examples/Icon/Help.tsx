import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Help'... Remove this comment to see the full error message
import HelpIcon from '@bufferapp/ui/Icon/Icons/Help'

/** Help */
export default function HelpIconExample() {
  return <HelpIcon size="large" />
}
