import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Avatar from '@bufferapp/ui/Avatar';
const customLabel = (React.createElement("div", null,
    React.createElement("span", { style: { color: '#21F32A' } }, "0.4%"),
    React.createElement("p", { style: { display: 'inline' } }, " potential reach")));
export default function ExampleTooltip() {
    return (React.createElement(Tooltip, { customLabel: customLabel, position: "bottom" },
        React.createElement(Avatar, { src: "https://s3.amazonaws.com/buffer-ui/Default+Avatar.png", alt: "@joelgascoigne", size: "medium" })));
}
//# sourceMappingURL=withCustomLabel.js.map