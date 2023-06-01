import React from 'react'
import Select from '@bufferapp/ui/Select'
import { NavBarMenu } from '@bufferapp/ui/NavBar'

/** With Custom Component */
export default function ExampleSelectMenu() {
  return (
    <Select
      onSelectClick={() => console.info('Selected')}
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
