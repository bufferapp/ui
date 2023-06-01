import React, { useState } from 'react';
import Select from '@bufferapp/ui/Select';
const data = [
    { _id: '1', name: 'First', selected: true },
    { _id: '2', name: 'Second', selected: true },
    { _id: '3', name: 'Third', selected: true },
    { _id: '4', name: 'Fourth', selected: true },
    { _id: '5', name: 'Fifth', selected: true },
];
export default function ExampleSelectWithSelectAll() {
    const [items, setItems] = useState(data);
    const handleClick = (option) => {
        if (option.name === 'All') {
            const newSelectedValue = !items.every((item) => item.selected === true);
            setItems(items.map((item) => (Object.assign(Object.assign({}, item), { selected: newSelectedValue }))));
        }
        else {
            setItems(items.map((item) => {
                if (item._id === option._id)
                    return Object.assign(Object.assign({}, item), { selected: !item.selected });
                return item;
            }));
        }
    };
    const allItemsOption = {
        _id: '0',
        name: 'All',
        selected: items.every((item) => item.selected === true),
    };
    return (React.createElement(Select, { onSelectClick: (item) => handleClick(item), label: "Try Select All", type: "primary", multiSelect: true, keyMap: {
            id: '_id',
            title: 'name',
        }, items: [allItemsOption, ...items], clearSearchOnBlur: true, searchInputProps: {
            clearSearchOnBlur: false,
        } }));
}
//# sourceMappingURL=SelectWithSelectAll.js.map