import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/SidebarListItem'... Remove this comment to see the full error message
import SidebarListItem from '@bufferapp/ui/SidebarListItem'

/** SidebarListItem With Custom Badge Example */
export default function SidebarListItemWithCustomBadge() {
  return (
    <SidebarListItem
      id="1a"
      title="My Label With Custom Badge"
      icon={
        <div
          style={{
            background: 'blue',
            width: '16px',
            height: '16px',
            borderRadius: '4px',
          }}
        />
      }
      onItemClick={() => console.info('hey')}
      badges={
        <span>
          <b style={{ color: 'rebeccapurple' }}>NEW</b>
        </span>
      }
    />
  )
}
