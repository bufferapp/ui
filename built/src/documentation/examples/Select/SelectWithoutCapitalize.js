import React from 'react';
import Select from '@bufferapp/ui/Select';
export default function ExampleWithoutCapitalize() {
    return (React.createElement(Select, { onSelectClick: () => true, label: "Click me", type: "primary", items: [
            { id: '1', title: 'hamish' },
            { id: '2', title: 'juliana' },
            { id: '3', title: 'joel' },
        ], position: "right", hideSearch: true, capitalizeItemLabel: false }));
}
//# sourceMappingURL=SelectWithoutCapitalize.js.map