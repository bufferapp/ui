import React from 'react'
import ProgressBar from '@bufferapp/ui/ProgressBar'

/** Progress Bar */
export default function ExampleProgressBar() {
  return (
    <div style={{ position: 'relative' }}>
      <ProgressBar progress="50%" />
    </div>
  )
}
