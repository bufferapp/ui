import React, { useState } from 'react'
import SegmentedControl from '@bufferapp/ui/SegmentedControl'
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon'

const options = [
  {
    label: 'Facebook',
    icon: <Facebook />,
    value: 'facebook',
    tooltip: "I'm Facebook",
  },
  {
    label: 'Pinterest',
    icon: <Pinterest />,
    value: 'pinterest',
    tooltip: "I'm Pinterest",
  },
  {
    label: 'Twitter',
    icon: <Twitter />,
    value: 'twitter',
    tooltip: "I'm Twitter",
  },
]

/**
 * Custom tooltip message
 */
export default function ExampleStateDisabled() {
  const [selected, setSelected] = useState('facebook')

  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl>
        {options.map(({ disabled, icon, label, value, tooltip }, index) => (
          <SegmentedControl.Option
            key={`${value}-${index}`}
            optionType="textAndIcon"
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
  )
}
