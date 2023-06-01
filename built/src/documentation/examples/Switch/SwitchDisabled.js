import React, { useState } from 'react';
import Switch from '@bufferapp/ui/Switch';
export default function ExampleSwitchDisabled() {
    const [value, setValue] = useState(false);
    return (React.createElement("div", { style: { position: 'relative' } },
        React.createElement(Switch, { isOn: value, disabled: true, handleSwitch: () => setValue(!value), label: "Notifications", id: "switch-disabled" })));
}
//# sourceMappingURL=SwitchDisabled.js.map