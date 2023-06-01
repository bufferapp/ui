import React from 'react'
import SidebarListItem from '@bufferapp/ui/SidebarListItem'

/** SidebarListItem With Custom Badge Example */
export default function SidebarListItemWithCustomBadge() {
  return (
    <SidebarListItem
      id="1a"
      title="My Label With Custom Badge"
      icon={(
        <div
          style={{
            background: 'blue',
            width: '16px',
            height: '16px',
            borderRadius: '4px',
          }}
        />
)}
      onItemClick={() => console.info('hey')}
      badges={(
        <span>
          <b style={{ color: 'rebeccapurple' }}>NEW</b>
        </span>
)}
    />
  )
}
