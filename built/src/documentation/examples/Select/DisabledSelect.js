import React from 'react';
import Select from '@bufferapp/ui/Select';
export default function ExampleSelectDisabled() {
    return (React.createElement(Select, { onSelectClick: () => console.info('Main select clicked'), label: "Click Me", disabled: true, keyMap: {
            id: '_id',
            title: 'name',
        }, items: [
            { _id: '1', name: 'Open' },
            { _id: '2', name: 'Pending' },
            { _id: '3', name: 'Closed' },
        ] }));
}
//# sourceMappingURL=DisabledSelect.js.map