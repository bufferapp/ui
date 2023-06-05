import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SidebarListItem'... Remove this comment to see the full error message
import SidebarListItem from '@bufferapp/ui/SidebarListItem'

/** SidebarListItem With Custom Component Example */
export default function ExampleSidebarListItem() {
  return (
    <SidebarListItem
      id="1a"
      title="Label Default"
      icon={
        <div
          style={{
            background: 'red',
            width: '16px',
            height: '16px',
            borderRadius: '4px',
          }}
        />
      }
      onItemClick={() => console.info('hey')}
      badges={123}
    />
  )
}
