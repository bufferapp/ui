import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Button' or its c... Remove this comment to see the full error message
import Button from '@bufferapp/ui/Button'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import UISelect from '@bufferapp/ui/Select'

class Select extends UISelect {
  // @ts-expect-error TS(7006) FIXME: Parameter 'option' implicitly has an 'any' type.
  handleSelectOption = (option, event) => {
    // @ts-expect-error TS(2339) FIXME: Property 'props' does not exist on type 'Select'.
    this.props.onSelectClick(option, event)
    // @ts-expect-error TS(2339) FIXME: Property 'setState' does not exist on type 'Select... Remove this comment to see the full error message
    this.setState({
      isOpen: false,
    })
  }
}

/** Split Button With Custom Select */
export default function ExampleSplitButtonWithCustomSelect() {
  return (
    <Button onClick={() => true} type="primary" isSplit label="Click Me">
      {/* @ts-expect-error TS(2607) FIXME: JSX element class does not support attributes beca... Remove this comment to see the full error message */}
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
  )
}
