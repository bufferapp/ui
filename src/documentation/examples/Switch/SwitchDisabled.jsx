import React, { useState } from 'react';
import Switch from '@bufferapp/ui/Switch';

/** Switch Disabled */
export default function ExampleSwitchDisabled() {
  const [value, setValue] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <Switch
        isOn={value}
        disabled
        handleSwitch={() => setValue(!value)}
        label='Notifications'
        id="switch-disabled"
      />
    </div>
  );
}
