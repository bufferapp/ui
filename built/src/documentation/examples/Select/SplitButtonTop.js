import React from 'react';
import Button from '@bufferapp/ui/Button';
export default function ExampleSplitButtonTop() {
    return (React.createElement(Button, { onSelectClick: () => true, onClick: () => true, label: "Reply + Close", type: "primary", selectPosition: "top", isSplit: true, items: [
            { id: '1', title: 'Reply + Pending' },
            { id: '2', title: 'Reply + Close + Assign To Me' },
        ] }));
}
//# sourceMappingURL=SplitButtonTop.js.map