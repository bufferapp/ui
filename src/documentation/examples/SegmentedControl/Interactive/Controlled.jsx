import React, { useState } from 'react';
import Text from '@bufferapp/ui/Text';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';

/**
 * Controlled
 */
export default function ExampleIconPosition() {
  const [selected, setSelected] = useState('facebook');

  return (
    <div style={{ display: 'inline-block' }}>
      <SegmentedControl
        optionType='textAndIcon'
        value={selected}
        onChange={setSelected}
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
        onClick={() => null}
      />
      <div style={{ padding: '10px' }} />
      <Text type='p'>
        Currently selected value:
      </Text>
      <Text type='h3'>
        {selected}
      </Text>
    </div>
  );
}
