import React, { useState } from 'react';
import Switch from '@bufferapp/ui/Switch';

/** Switch Basic */
export default function ExampleSwitch() {
  const [value, setValue] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <Switch 
        isOn={value}
        disabled={false}
        handleSwitch={() => setValue(!value)}
        label={value ? 'On' : 'Off'} 
        id="example-switch"
      />
    </div>
  );
}
