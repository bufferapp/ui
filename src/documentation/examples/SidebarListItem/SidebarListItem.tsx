import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SidebarListItem'... Remove this comment to see the full error message
import SidebarListItem from '@bufferapp/ui/SidebarListItem'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { Person } from '@bufferapp/ui/Icon'

/** SidebarListItem Example */
export default function ExampleSidebarListItem() {
  return (
    <SidebarListItem
      id="1a"
      title="Label Default"
      icon={<Person />}
      onItemClick={() => console.info('hey')}
      badges={123}
    />
  )
}
