import React from 'react';
import Button from '@bufferapp/ui/Button';
export default function ExampleSplitButtonDisabled() {
    return (React.createElement(Button, { onSelectClick: () => true, onClick: () => true, label: "Reply + Close", type: "primary", disabled: true, isSplit: true, items: [
            { id: '1', title: 'Reply + Pending' },
            { id: '2', title: 'Reply + Close + Assign To Me' },
        ] }));
}
//# sourceMappingURL=SplitButtonDisabled.js.map