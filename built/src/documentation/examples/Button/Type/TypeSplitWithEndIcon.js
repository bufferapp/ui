import React from 'react';
import Button from '@bufferapp/ui/Button';
import Tag from '@bufferapp/ui/Tag';
import { Flash } from '@bufferapp/ui/Icon';
export default function ExampleSplitButton() {
    return (React.createElement(Button, { onSelectClick: () => true, onClick: () => true, type: "secondary", isSplit: true, items: [
            { id: '1', title: 'Save as Draft' },
            {
                id: '2',
                title: 'Request Approval',
                icon: (React.createElement(Tag, { color: "purpleLighter" },
                    React.createElement(Flash, { color: "purple" }))),
                iconEnd: true,
            },
        ], label: "Click Me" }));
}
//# sourceMappingURL=TypeSplitWithEndIcon.js.map