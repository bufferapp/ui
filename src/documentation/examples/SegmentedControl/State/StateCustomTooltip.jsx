import React from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';

/**
 * Custom tooltip message
 */
export default function ExampleStateDisabled() {
  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl
        optionType='textAndIcon'
        options={[
          {
            label: 'Facebook',
            icon: <Facebook />,
            value: 'facebook',
            tooltip: 'I\'m Facebook',
          },
          {
            label: 'Pinterest',
            icon: <Pinterest />,
            value: 'pinterest',
            tooltip: 'I\'m Pinterest',
          }, {
            label: 'Twitter',
            icon: <Twitter />,
            value: 'twitter',
            tooltip: 'I\'m Twitter',
          },
        ]}
        onClick={() => {
        }}
      />
    </div>
  );
}
