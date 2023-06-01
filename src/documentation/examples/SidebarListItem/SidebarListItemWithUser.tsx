import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SidebarListItem'... Remove this comment to see the full error message
import SidebarListItem from '@bufferapp/ui/SidebarListItem'

/** SidebarListItem With User Example */
export default function ExampleSidebarListItem() {
  const userMock = {
    id: 'W_Lvu75KcgABAT6L',
    name: 'Joel Gascoigne',
    handle: '@joelgascogine',
    profileImageUrl: 'http://i.pravatar.cc/64?img=60',
    network: 'instagram',
  }

  return (
    <SidebarListItem
      id="1a"
      title="Label Default"
      onItemClick={() => console.info('hey')}
      badges={123}
      user={userMock}
    />
  )
}
