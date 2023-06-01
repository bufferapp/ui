import React, { useState } from 'react';
import Switch from '@bufferapp/ui/Switch';
export default function ExampleSwitchOn() {
    const [value, setValue] = useState(true);
    return (React.createElement("div", { style: { position: 'relative' } },
        React.createElement(Switch, { isOn: value, disabled: false, handleSwitch: () => setValue(!value), label: value ? 'On' : 'Off', id: "switch-on" })));
}
//# sourceMappingURL=SwitchOn.js.map