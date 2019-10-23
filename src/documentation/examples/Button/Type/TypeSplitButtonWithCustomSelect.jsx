import React from 'react';
import Button from '@bufferapp/ui/Button';
import UISelect from '@bufferapp/ui/Select';

class Select extends UISelect {
  handleSelectOption = (option, event) => {
    this.props.onSelectClick(option, event)
    this.setState({
      isOpen: false,
    })
  }
}

/** Split Button With Custom Select */
export default function ExampleSplitButtonWithCustomSelect() {
  return (
    <Button
      onClick={() => true}
      type="primary"
      isSplit
      label="Click Me"
    >
      <Select
        onSelectClick={() => true}
        items={[
          { id: '1', title: 'Reply + Pending' },
          { id: '2', title: 'Reply + Close + Assign To Me' },
        ]}
        type="primary"
        isSplit
        xPosition="right"
        hideSearch
      />
    </Button>
  );
}
