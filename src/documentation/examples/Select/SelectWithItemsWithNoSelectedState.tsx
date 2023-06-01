import React from 'react'
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

/** Basic Without Selected State On Items */
export default function ExampleSelect() {
  return (
    // @ts-expect-error TS(2607) FIXME: JSX element class does not support attributes beca... Remove this comment to see the full error message
    <Select
      onSelectClick={() => console.info('Main select clicked')}
      label="Click Me"
      keyMap={{
        id: '_id',
        title: 'name',
      }}
      items={[
        {
          _id: '1',
          name: 'OpenOpenOpenOpenOpenOpenOpenOpenOpen',
          hotKeyPrompt: 'Q',
        },
        { _id: '2', name: 'Pending' },
        { _id: '3', name: 'Closed' },
        { _id: '4', name: 'Open' },
        { _id: '5', name: 'Pending' },
        { _id: '6', name: 'Closed' },
        { _id: '7', name: 'Open' },
        { _id: '8', name: 'Pending' },
        { _id: '9', name: 'Closed' },
        { _id: '10', name: 'Open' },
        { _id: '11', name: 'Pending' },
        { _id: '23', name: 'Closed' },
        { _id: '21', name: 'Open' },
        { _id: '22', name: 'Pending' },
        { _id: '33', name: 'Closed' },
        { _id: '41', name: 'Open' },
        { _id: '52', name: 'Pending' },
        { _id: '63', name: 'Closed' },
      ]}
      hotKeys={[
        {
          hotKey: 81,
          onKeyPress: () => {
            console.info('hey')
          },
        },
        {
          hotKey: 87,
          onKeyPress: () => {
            console.info('hello there')
          },
        },
      ]}
      hasCustomAction
      // @ts-expect-error TS(7006) FIXME: Parameter 'string' implicitly has an 'any' type.
      onCustomItemClick={(string) => console.info(string)}
      customItemLabel="Create Tag"
    />
  )
}
