import React, { useState } from 'react';
import Switch from '@bufferapp/ui/Switch';

/** Disabled Switch */
export default function ExampleDisabledSwitch() {
  const [value, setValue] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <Switch
        isOn={value}
        disabled
        handleToggle={() => setValue(!value)}
        label={value ? 'On' : 'Off'}
      />
    </div>
  );
}
