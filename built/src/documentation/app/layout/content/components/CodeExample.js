import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
export default class CodeExample extends React.Component {
    componentDidMount() {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightBlock(this.element);
    }
    render() {
        const { children } = this.props;
        return (React.createElement("pre", { ref: (ref) => {
                this.element = ref;
            } },
            React.createElement("code", null, children)));
    }
}
CodeExample.propTypes = {
    children: PropTypes.string.isRequired,
};
//# sourceMappingURL=CodeExample.js.map