import React, { useState } from 'react';
import Select from '@bufferapp/ui/Select';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';
const options = [
    {
        label: 'Facebook',
        icon: React.createElement(Facebook, null),
        value: 'facebook',
    },
    {
        label: 'Pinterest',
        icon: React.createElement(Pinterest, null),
        value: 'pinterest',
    },
    {
        label: 'Twitter',
        icon: React.createElement(Twitter, null),
        value: 'twitter',
    },
];
export default function ExampleIconPosition() {
    const [selected, setSelected] = useState('facebook');
    const [iconPosition, setIconPosition] = useState('left');
    const handleSelect = (item) => {
        setIconPosition(item.title);
    };
    return (React.createElement("div", { style: { display: 'inline-block' } },
        React.createElement(SegmentedControl, null, options.map(({ disabled, icon, label, value, tooltip }, index) => (React.createElement(SegmentedControl.Option, { key: `${value}-${index}`, optionType: "textAndIcon", disabled: disabled, icon: icon, label: label, value: value, tooltip: tooltip, selected: value === selected, onClick: setSelected, iconPosition: iconPosition })))),
        React.createElement("div", { style: { padding: '10px' } }),
        React.createElement(Select, { onSelectClick: handleSelect, label: "Icon position", items: [
                { id: '1', title: 'left' },
                { id: '2', title: 'right' },
                { id: '3', title: 'top' },
                { id: '4', title: 'bottom' },
            ], hideSearch: true })));
}
//# sourceMappingURL=IconPosition.js.map