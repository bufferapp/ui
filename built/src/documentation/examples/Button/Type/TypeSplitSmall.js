import React from 'react';
import Button from '@bufferapp/ui/Button';
export default function ExampleSplitButtonSmall() {
    return (React.createElement(Button, { onSelectClick: () => true, onClick: () => true, size: "small", type: "primary", isSplit: true, items: [
            { id: '1', title: 'Reply + Pending' },
            { id: '2', title: 'Reply + Close + Assign To Me' },
        ], label: "Click Me" }));
}
//# sourceMappingURL=TypeSplitSmall.js.map