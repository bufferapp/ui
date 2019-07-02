import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Select from '@bufferapp/ui/Select';
import { Person } from '@bufferapp/ui/Icon';

/** Multiline */
export default function ExampleTooltip() {
  return (
    <Tooltip label="My Tooltip Label with multiple lines. Adding up an example here with a long tooltip text." position="right">
      <Select
        onSelectClick={() => true}
        label="Click Me"
        icon={<Person color="white" />}
        type="primary"
        items={[
          { id: '1', title: 'Open' },
          { id: '2', title: 'Pending' },
          { id: '3', title: 'Closed' },
        ]}
      />
    </Tooltip>
  )
}
