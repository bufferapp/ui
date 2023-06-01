import React, { useState } from 'react';
import Switch from '@bufferapp/ui/Switch';
export default function ExampleSwitchOff() {
    const [value, setValue] = useState(false);
    return (React.createElement("div", { style: { position: 'relative' } },
        React.createElement(Switch, { isOn: value, disabled: false, handleSwitch: () => setValue(!value), label: "Notifications", id: "switch-off" })));
}
//# sourceMappingURL=SwitchOff.js.map