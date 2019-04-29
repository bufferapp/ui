import React from 'react';
import Notification from '@bufferapp/ui/Notification';

/** Notification with text */
export default function ExampleNotification() {
  return (
    // the wrapping div is only for documentation example purposes
    <div style={{position: 'relative', height: '100px'}}>
      <Notification text="There's been an error fetching data. Your access has expired. Please login again" />
    </div>
  );
}
