var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MarkdownToJsx from 'markdown-to-jsx';
import LinkCard from './components/LinkCard';
import Heading from './components/Heading';
import InfoCard from './components/InfoCard';
import LinkItem from './components/LinkItem';
import ColorCopy from './components/ColorCopy';
const LinkWrapper = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: calc(50% - 8px) calc(50% - 8px);
  grid-template-rows: auto;
  justify-content: center;
  padding: 0px;
  margin: 24px 0px;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  background: #ffffff;
`;
const Paragraph = styled.p `
  font-size: 16px;
  line-height: 1.625;
  font-weight: 400;
`;
const ColorRow = styled.div `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 20px;
`;
const ColorColumn = styled.div `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  margin-right: 10px;
  flex-grow: 1;
`;
const CodeBlock = styled.pre `
  counter-reset: line 0;
  font-family: 'Source Code Pro', Menlo, monospace;
  font-size: 85%;
  line-height: 1.7;
  tab-size: 4;
  background-color: rgb(245, 247, 249);
  overflow-x: auto;
  padding: 15px 20px;
  border-radius: 3px;
  margin: 15px 0;
`;
const Img = styled.img `
  zoom: 0.5;
  max-width: 100%;
`;
export default class Markdown extends React.Component {
    render() {
        const DocHeading = (_a) => {
            var { children } = _a, props = __rest(_a, ["children"]);
            return React.createElement(Heading, Object.assign({}, props));
        };
        const { page, component, links } = this.props;
        return [
            React.createElement(MarkdownToJsx, { options: {
                    overrides: {
                        h1: {
                            component: DocHeading,
                            props: {
                                text: page.name,
                            },
                        },
                        a: {
                            component: LinkItem,
                        },
                        p: {
                            component: Paragraph,
                        },
                        img: {
                            component: Img,
                        },
                        ColorRow,
                        ColorColumn,
                        ColorCopy,
                        InfoCard,
                        code: {
                            component: CodeBlock,
                        },
                    },
                } }, component),
            React.createElement(LinkWrapper, null, links[0] &&
                links.map((link) => (React.createElement(LinkCard, { name: link.name, id: link.id, key: link.id })))),
        ];
    }
}
Markdown.propTypes = {
    page: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};
//# sourceMappingURL=Markdown.js.map