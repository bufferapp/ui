import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Button from '@bufferapp/ui/Button';
export default function ExampleTooltip() {
    return (React.createElement(Tooltip, { label: "My Tooltip Label \uD83D\uDE4C", position: "left" },
        React.createElement(Button, { type: "primary", onClick: () => { }, label: "Click Me", fullWidth: true })));
}
//# sourceMappingURL=left.js.map