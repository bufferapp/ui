import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/ProgressBar' or ... Remove this comment to see the full error message
import ProgressBar from '@bufferapp/ui/ProgressBar'

/** Progress Bar */
export default function ExampleProgressBar() {
  return (
    <div style={{ position: 'relative' }}>
      <ProgressBar progress="50%" />
    </div>
  )
}
