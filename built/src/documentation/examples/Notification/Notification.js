import React from 'react';
import Notification from '@bufferapp/ui/Notification';
export default function ExampleNotification() {
    return (React.createElement("div", { style: { position: 'relative', height: '100px' } },
        React.createElement(Notification, { text: "There's been an error fetching data. Your access has expired. Please login again" })));
}
//# sourceMappingURL=Notification.js.map