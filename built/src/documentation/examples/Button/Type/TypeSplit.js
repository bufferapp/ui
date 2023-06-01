import React from 'react';
import Button from '@bufferapp/ui/Button';
export default function ExampleSplitButton() {
    return (React.createElement(Button, { onSelectClick: () => true, onClick: () => true, type: "primary", isSplit: true, items: [
            { id: '1', title: 'Reply + Pending' },
            { id: '2', title: 'Reply + Close + Assign To Me' },
        ], label: "Click Me" }));
}
//# sourceMappingURL=TypeSplit.js.map