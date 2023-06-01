import React, { useState } from 'react'
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

/** Text only */
export default function ExampleTypeTextOnly() {
  const [selected, setSelected] = useState('facebook')

  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl>
        {/* @ts-expect-error TS(2339) FIXME: Property 'disabled' does not exist on type '{ labe... Remove this comment to see the full error message */}
        {options.map(({ disabled, icon, label, value, tooltip }, index) => (
          <SegmentedControl.Option
            key={`${value}-${index}`}
            optionType="text"
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

/** The value of the option to select by default. If the option is disabled,
 * or no defaultOption value is passed it will revert to the first
 * non-disabled option in the array. */
