import React from 'react';
import Button from '@bufferapp/ui/Button';
import { MessageFilled } from '@bufferapp/ui/Icon';
export default function ExampleButton() {
    return (React.createElement(Button, { type: "primary", icon: React.createElement(MessageFilled, { color: "white" }), iconEnd: true, onClick: () => { }, label: "Click Me" }));
}
//# sourceMappingURL=TypePrimaryIconEnd.js.map