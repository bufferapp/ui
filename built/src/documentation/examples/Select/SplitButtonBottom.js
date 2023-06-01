import React from 'react';
import Button from '@bufferapp/ui/Button';
export default function ExampleSplitButtonBottom() {
    return (React.createElement(Button, { onSelectClick: () => true, onClick: () => true, label: "Reply + Close", type: "primary", isSplit: true, items: [
            { id: '1', title: 'Reply + Pending1' },
            { id: '2', title: 'Reply + Close + Assign To Me' },
        ], hideSearch: true }));
}
//# sourceMappingURL=SplitButtonBottom.js.map