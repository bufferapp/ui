import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { Person, People, Gear, ArrowLeft } from '@bufferapp/ui/Icon'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/NavBar' or its c... Remove this comment to see the full error message
import { NavBarMenu } from '@bufferapp/ui/NavBar'

/** With Custom Component and Custom Items */
export default function ExampleSelectMenu() {
  return (
    <Select
      // @ts-expect-error TS(7006) FIXME: Parameter 'selectedItem' implicitly has an 'any' t... Remove this comment to see the full error message
      onSelectClick={(selectedItem) => selectedItem.selectedItemClick()}
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
        {
          id: '1',
          title: 'Account',
          icon: <Person color="gray" />,
          selectedItemClick: () => console.info('Account Clicked'),
        },
        {
          id: '2',
          title: 'Organization',
          icon: <People color="gray" />,
          selectedItemClick: () => console.info('Organization Clicked'),
        },
        {
          id: '3',
          title: 'Settings',
          icon: <Gear color="gray" />,
          selectedItemClick: () => console.info('Settings Clicked'),
        },
        {
          id: '4',
          title: 'Logout',
          icon: <ArrowLeft color="gray" />,
          hasDivider: true,
          selectedItemClick: () => console.info('Logout Clicked'),
        },
        {
          id: '5',
          title: 'Logout',
          icon: <ArrowLeft color="gray" />,
          hasDivider: true,
          dividerTitle: 'Logout',
          selectedItemClick: () => console.info('Logout Clicked'),
        },
      ]}
      marginTop="32px"
      hideSearch
    />
  )
}
