import React, { useState } from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SegmentedControl... Remove this comment to see the full error message
import SegmentedControl from '@bufferapp/ui/SegmentedControl'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon'

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
  },
  {
    label: 'Twitter',
    icon: <Twitter />,
    value: 'twitter',
  },
]

/**
 * Option disabled
 */
export default function ExampleStateOptionDisabled() {
  const [selected, setSelected] = useState('pinterest')

  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl>
        {/* @ts-expect-error TS(2339) FIXME: Property 'tooltip' does not exist on type '{ disab... Remove this comment to see the full error message */}
        {options.map(({ disabled, icon, label, value, tooltip }, index) => (
          <SegmentedControl.Option
            key={`${value}-${index}`}
            optionType="textAndIcon"
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
  )
}
