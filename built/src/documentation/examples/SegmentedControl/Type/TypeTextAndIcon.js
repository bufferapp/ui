import React, { useState } from 'react';
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
export default function ExampleTypeTextAndIcon() {
    const [selected, setSelected] = useState('facebook');
    return (React.createElement("div", { style: { display: 'inline-block' } },
        React.createElement(SegmentedControl, null, options.map(({ disabled, icon, label, value, tooltip }, index) => (React.createElement(SegmentedControl.Option, { key: `${value}-${index}`, optionType: "textAndIcon", disabled: disabled, icon: icon, label: label, value: value, tooltip: tooltip, selected: value === selected, onClick: setSelected }))))));
}
//# sourceMappingURL=TypeTextAndIcon.js.map