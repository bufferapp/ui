import React from 'react'
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
