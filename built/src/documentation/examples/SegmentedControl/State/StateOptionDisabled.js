import React, { useState } from 'react';
import SegmentedControl from '@bufferapp/ui/SegmentedControl';
import { Facebook, Pinterest, Twitter } from '@bufferapp/ui/Icon';
const options = [
    {
        disabled: true,
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
export default function ExampleStateOptionDisabled() {
    const [selected, setSelected] = useState('pinterest');
    return (React.createElement("div", { style: { display: 'inline-block' } },
        React.createElement(SegmentedControl, null, options.map(({ disabled, icon, label, value, tooltip }, index) => (React.createElement(SegmentedControl.Option, { key: `${value}-${index}`, optionType: "textAndIcon", disabled: disabled, icon: icon, label: label, value: value, tooltip: tooltip, selected: !disabled && value === selected, onClick: setSelected }))))));
}
//# sourceMappingURL=StateOptionDisabled.js.map