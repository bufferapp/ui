import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MarkdownToJsx from 'markdown-to-jsx';
const Table = styled.table `
  width: 100%;
  border-radius: 7px;
  border: 1px solid #e6ecf1;
  overflow: hidden;
`;
const TableHeader = styled.thead `
  background: #f6f7f9;
  padding: 0 10px;
`;
const Label = styled.th `
  text-align: left;
  padding: 10px 0 10px 10px;
  padding-right: 25px;
  font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  font-weight: 500;
  font-size: 12px;
  opacity: 0.8;
  ${(props) => props.right && 'text-align: right;'}
`;
const Row = styled.tr `
  padding: 5px 0px;
  vertical-align: top;
`;
const Item = styled.td `
  border-top: 2px solid #e6ecf1;
  padding: 10px 0 10px 10px;
  padding-right: 25px;
  font-size: 14px;
  font-family: ${(props) => props.paragraph
    ? 'inherit'
    : '"Fira Code", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'};
  line-height: ${(props) => (props.paragraph ? '1.5' : 'inherit')};
  ${(props) => (props.bold ? 'font-weight: 500;' : '')}
  code {
    background: #f3f3f3;
    border-radius: 4px;
    font-size: 12px;
  }
`;
const PropNameItem = styled(Item) `
  background: linear-gradient(to right, #fff, #f9fafb);
  color: #000;
  text-align: right;
  padding-left: 16px;
`;
const Props = ({ props }) => (React.createElement(Table, { cellPadding: "0", cellSpacing: "0" },
    React.createElement(TableHeader, null,
        React.createElement("tr", null,
            React.createElement(Label, { right: true }, "Property"),
            React.createElement(Label, null, "Type"),
            React.createElement(Label, null, "Required"),
            React.createElement(Label, null, "Default"),
            React.createElement(Label, null, "Description"))),
    React.createElement("tbody", null, Object.keys(props).map((key) => (React.createElement(Row, { key: key },
        React.createElement(PropNameItem, { bold: true, prop: true }, key),
        React.createElement(Item, { bold: true }, props[key].type.name),
        React.createElement(Item, null, props[key].required ? '✓' : ''),
        React.createElement(Item, null, props[key].defaultValue &&
            props[key].defaultValue.value !== 'undefined' &&
            props[key].defaultValue.value),
        React.createElement(Item, { paragraph: true },
            React.createElement(MarkdownToJsx, null, props[key].description))))))));
Props.propTypes = {
    props: PropTypes.shape({
        description: PropTypes.string,
        type: PropTypes.shape({
            name: PropTypes.string,
        }),
        defaultValue: PropTypes.shape({
            value: PropTypes.string,
        }),
        required: PropTypes.bool,
    }).isRequired,
};
export default Props;
//# sourceMappingURL=Props.js.map