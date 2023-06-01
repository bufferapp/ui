import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Avatar from '@bufferapp/ui/Avatar';
export default function ExampleTooltip() {
    return (React.createElement(Tooltip, { label: "My Tooltip Label with multiple lines. Adding up an example here with a long tooltip text.", position: "bottom", hotkey: "\u2318+C" },
        React.createElement(Avatar, { src: "https://s3.amazonaws.com/buffer-ui/Default+Avatar.png", alt: "@joelgascoigne", size: "medium" })));
}
//# sourceMappingURL=withHotkey.js.map