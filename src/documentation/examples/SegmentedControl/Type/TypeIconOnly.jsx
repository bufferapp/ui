import React, { useState } from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import Facebook from '@bufferapp/ui/Icons/Facebook'
import Pinterest from '@bufferapp/ui/Icons/Pinterest'
import Twitter from '@bufferapp/ui/Icons/Twitter'

const options = [
  {
    label: 'Facebook',
    icon: <Facebook />,
    value: 'facebook',
    tooltip: 'Custom tooltip message',
  },
  {
    label: 'Pinterest',
    icon: <Pinterest />,
    value: 'pinterest',
  }, {
    label: 'Twitter',
    icon: <Twitter />,
    value: 'twitter',
  },
]

/** Icon only. Always shows tooltip. */
export default function ExampleTypeIconOnly() {
  const [selected, setSelected] = useState('facebook');

  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl>
        {options.map(({ disabled, icon, label, value, tooltip }, index) => (
          <SegmentedControl.Option
            key={`${value}-${index}`}
            optionType='icon'
            disabled={disabled}
            icon={icon}
            label={label}
            value={value}
            tooltip={tooltip}
            selected={value === selected}
            onClick={setSelected}
          />
        ))}
      </SegmentedControl>
    </div>
  );
}
