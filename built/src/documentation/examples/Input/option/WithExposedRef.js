import React, { useRef } from 'react';
import Input from '@bufferapp/ui/Input';
export default function ExampleInput() {
    const inputRef = useRef(null);
    return (React.createElement(React.Fragment, null,
        React.createElement(Input, { onChange: () => { }, name: "foo", ref: inputRef }),
        React.createElement("button", { type: "button", onClick: () => inputRef.current.focus() }, "Focus input")));
}
//# sourceMappingURL=WithExposedRef.js.map