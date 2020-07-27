import React, { useState } from 'react';
import Switch from '@bufferapp/ui/Switch';

/** Switch On */
export default function ExampleSwitchOn() {
  const [value, setValue] = useState(true);

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
  );
}
