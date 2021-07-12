import React, { useState } from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';

const options = [
  {
    disabled: true,
    label: 'Facebook',
    icon: <Facebook />,
    value: 'facebook',
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

/**
 * Option disabled
 */
export default function ExampleStateOptionDisabled() {
  const [selected, setSelected] = useState('pinterest');

  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl>
        {options.map(({ disabled, icon, label, value, tooltip }, index) => (
          <SegmentedControl.Option
            key={`${value}-${index}`}
            optionType='textAndIcon'
            disabled={disabled}
            icon={icon}
            label={label}
            value={value}
            tooltip={tooltip}
            selected={!disabled && value === selected}
            onClick={setSelected}
          />
        ))}
      </SegmentedControl>
    </div>
  );
}
