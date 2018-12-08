import React from 'react';
import ButtonSelect from '@bufferapp/ui/ButtonSelect';

/** Split Button with Select */
export default function ExampleSelect() {
  return (
    <ButtonSelect
      onSelectClick={() => true}
      label="Reply + Close"
      type="primary"
      items={[{ id: 1, title: 'Reply + Pending' },
        { id: 2, title: 'Reply + Close + Assign To Me' }]}
    />
  );
}
