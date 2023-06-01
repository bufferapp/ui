import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/NavBar' or its c... Remove this comment to see the full error message
import { NavBarMenu } from '@bufferapp/ui/NavBar'

/** With Custom Component */
export default function ExampleSelectMenu() {
  return (
    <Select
      onSelectClick={() => console.info('Selected')}
      // @ts-expect-error TS(7006) FIXME: Parameter 'onButtonClick' implicitly has an 'any' ... Remove this comment to see the full error message
      customButton={(onButtonClick) => (
        <NavBarMenu
          user={{
            name: 'Courtney Seiter',
            email: 'courtney@buffer.com',
          }}
          onClick={onButtonClick}
        />
      )}
      items={[
        { id: '1', title: 'Option 1' },
        { id: '2', title: 'Option 2' },
        { id: '3', title: 'Option 3' },
      ]}
      marginTop="32px"
      hideSearch
    />
  )
}
