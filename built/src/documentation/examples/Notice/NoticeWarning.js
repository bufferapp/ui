import React from 'react';
import Notice from '@bufferapp/ui/Notice';
import Text from '@bufferapp/ui/Text';
export default function ExampleNotice() {
    return (React.createElement(Notice, { type: "warning" },
        React.createElement(Text, null, "We're aware of an issue and we're actively working to resolve the situation")));
}
//# sourceMappingURL=NoticeWarning.js.map