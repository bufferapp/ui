import React from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';

/**
 * Entire component disabled
 */
export default function ExampleStateDisabled() {
  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl
        optionType='textAndIcon'
        disabled
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
