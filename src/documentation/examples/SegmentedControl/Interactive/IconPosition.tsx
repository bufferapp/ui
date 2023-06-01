import React, { useState } from 'react'
import Select from '@bufferapp/ui/Select'
import SegmentedControl from '@bufferapp/ui/SegmentedControl'
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon'

const options = [
  {
    label: 'Facebook',
    icon: <Facebook />,
    value: 'facebook',
  },
  {
    label: 'Pinterest',
    icon: <Pinterest />,
    value: 'pinterest',
  },
  {
    label: 'Twitter',
    icon: <Twitter />,
    value: 'twitter',
  },
]

/**
 * Select Icon Position
 */
export default function ExampleIconPosition() {
  const [selected, setSelected] = useState('facebook')
  const [iconPosition, setIconPosition] = useState('left')

  const handleSelect = (item) => {
    setIconPosition(item.title)
  }

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
            iconPosition={iconPosition}
          />
        ))}
      </SegmentedControl>
      <div style={{ padding: '10px' }} />
      <Select
        onSelectClick={handleSelect}
        label="Icon position"
        items={[
          { id: '1', title: 'left' },
          { id: '2', title: 'right' },
          { id: '3', title: 'top' },
          { id: '4', title: 'bottom' },
        ]}
        hideSearch
      />
    </div>
  )
}
