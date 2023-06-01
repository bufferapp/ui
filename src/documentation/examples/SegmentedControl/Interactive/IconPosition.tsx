import React, { useState } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SegmentedControl... Remove this comment to see the full error message
import SegmentedControl from '@bufferapp/ui/SegmentedControl'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
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

  // @ts-expect-error TS(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  const handleSelect = (item) => {
    setIconPosition(item.title)
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl>
        {/* @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type '{ labe... Remove this comment to see the full error message */}
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
