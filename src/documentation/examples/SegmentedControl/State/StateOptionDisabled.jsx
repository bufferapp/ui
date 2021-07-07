import React from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';

/**
 * Option disabled
 */
export default function ExampleStateOptionDisabled() {
  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl
        optionType='textAndIcon'
        options={[
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
        ]}
        onClick={() => {
        }}
      />
    </div>
  );
}
