import React from 'react';
import Notification from '@bufferapp/ui/Notification';
export default function ExampleNotification() {
    return (React.createElement("div", { style: { position: 'relative', height: '100px' } },
        React.createElement(Notification, { text: "Conversation has been set to Pending", type: "action", action: { label: 'Undo' }, secondaryAction: { label: 'Go Back' } })));
}
//# sourceMappingURL=NotificationAction.js.map