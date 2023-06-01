import React from 'react'
import Notification from '@bufferapp/ui/Notification'

/** Notification with action buttons */
export default function ExampleNotification() {
  return (
    // the wrapping div is only for documentation example purposes
    <div style={{ position: 'relative', height: '100px' }}>
      <Notification
        text="Conversation has been set to Pending"
        type="action"
        action={{ label: 'Undo' }}
        secondaryAction={{ label: 'Go Back' }}
      />
    </div>
  )
}
