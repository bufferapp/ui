import React, { useState } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Switch' or its c... Remove this comment to see the full error message
import Switch from '@bufferapp/ui/Switch'

/** Switch On */
export default function ExampleSwitchOn() {
  const [value, setValue] = useState(true)

  return (
    <div style={{ position: 'relative' }}>
      <Switch
        isOn={value}
        disabled={false}
        handleSwitch={() => setValue(!value)}
        label={value ? 'On' : 'Off'}
        id="switch-on"
      />
    </div>
  )
}
