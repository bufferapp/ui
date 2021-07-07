import React from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';

/** Icon only. Always shows tooltip. */
export default function ExampleTypeIconOnly() {
  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl
        optionType='icon'
        options={[
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
        ]}
        onClick={() => {
        }}
      />
    </div>
  );
}
