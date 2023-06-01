import React from 'react';
import TextArea from '@bufferapp/ui/TextArea';
export default function ExampleTextArea() {
    return (React.createElement(TextArea, { label: "Textarea (Error)", placeholder: "placeholder", onChange: () => { }, hasError: true, help: "nope", id: "example3", value: "this is a textarea with an error" }));
}
//# sourceMappingURL=TextAreaWithError.js.map