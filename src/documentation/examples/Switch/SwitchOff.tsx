import React, { useState } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Switch' or its c... Remove this comment to see the full error message
import Switch from '@bufferapp/ui/Switch'

/** Switch Off */
export default function ExampleSwitchOff() {
  const [value, setValue] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <Switch
        isOn={value}
        disabled={false}
        handleSwitch={() => setValue(!value)}
        label="Notifications"
        id="switch-off"
      />
    </div>
  )
}
