import React from 'react';
import Select from '@bufferapp/ui/Select';
import MoreIcon from '@bufferapp/ui/Icon/Icons/More';
export default function ExampleSelect() {
    return (React.createElement(Select, { onSelectClick: () => true, label: "Click me", icon: React.createElement(MoreIcon, null), type: "primary", items: [
            { id: '1', title: 'Open' },
            { id: '2', title: 'Pending' },
            { id: '3', title: 'Closed' },
        ], hasIconOnly: true, position: "right", hideSearch: true }));
}
//# sourceMappingURL=SelectIconOnly.js.map