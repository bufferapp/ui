import React from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';

/** Text and Icon */
export default function ExampleTypeTextAndIcon() {
  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl
        optionType='textAndIcon'
        options={[
          {
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
        ]}
        onClick={() => {
        }}
      />
    </div>
  );
}

/** The value of the option to select by default. If the option is disabled,
 * or no defaultOption value is passed it will revert to the first
 * non-disabled option in the array. */