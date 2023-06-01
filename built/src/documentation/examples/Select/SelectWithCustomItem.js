import React from 'react';
import Select from '@bufferapp/ui/Select';
export default function ExampleSelectWithCustomItem() {
    return (React.createElement(Select, { onSelectClick: (selectedItem) => selectedItem.selectedItemClick(), label: "Click Me", items: [
            {
                id: '1',
                title: 'Red',
                color: 'red',
                component: (item) => `<div style="background: ${item.color}; width: 10px; height: 10px"/>`,
                selectedItemClick: () => console.info('Red Clicked'),
            },
            {
                id: '2',
                title: 'Green',
                color: 'green',
                component: (item) => `<div style="background: ${item.color}; width: 10px; height: 10px"/>`,
                selectedItemClick: () => console.info('Green Clicked'),
            },
            {
                id: '3',
                title: 'Blue',
                color: 'blue',
                component: (item) => `<div style="background: ${item.color}; width: 10px; height: 10px"/>`,
                selectedItemClick: () => console.info('Blue Clicked'),
            },
        ], hideSearch: true }));
}
//# sourceMappingURL=SelectWithCustomItem.js.map