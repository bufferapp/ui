import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon/Icons/Flag'... Remove this comment to see the full error message
import FlagIcon from '@bufferapp/ui/Icon/Icons/Flag'

/** Flag */
export default function FlagIconExample() {
  return <FlagIcon size="large" />
}
