import React from 'react';
import Notice from '@bufferapp/ui/Notice';
import Text from '@bufferapp/ui/Text';
export default function ExampleNotice() {
    return (React.createElement(Notice, { dismiss: () => console.log('dismissed!'), type: "warning" },
        React.createElement(Text, null, "We're aware of an issue and we're actively working to resolve the situation. Thanks for your patience, you're honeslty the very best and this message is so long!")));
}
//# sourceMappingURL=NoticeLongText.js.map