import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MarkdownToJsx from 'markdown-to-jsx';

const Table = styled.table`
  width: 100%;
  border-radius: 7px;
  border: 1px solid #e6ecf1;
  overflow: hidden;
`;

const TableHeader = styled.thead`
  background: #f6f7f9;
  padding: 0 10px;
`;

const Label = styled.th`
  text-align: left;
  padding: 10px 0 10px 10px;
  padding-right: 25px;
  font-family: "Fira Code", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  font-weight: 500;
  font-size: 12px;
  opacity: 0.8;
  ${props => props.right && 'text-align: right;'}
`;

const Row = styled.tr`
  padding: 5px 0px;
  vertical-align: top;
`;

const Item = styled.td`
  border-top: 2px solid #e6ecf1;
  padding: 10px 0 10px 10px;
  padding-right: 25px;
  font-size: 14px;
  font-family: ${props => (props.paragraph
    ? 'inherit'
    : '"Fira Code", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
  )};
  line-height: ${props => (props.paragraph
    ? '1.5'
    : 'inherit'
  )};
  ${props => (props.bold ? 'font-weight: 500;' : '')}
  code {
    background: #f3f3f3;
    border-radius: 4px;
    font-size: 12px;
  }
`;

const PropNameItem = styled(Item)`
  background: linear-gradient(to right, #fff, #f9fafb);
  color: #000;
  text-align: right;
  padding-left: 16px;
`;

const NameItem = style.td`
    font-family: Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 13px;
    color: #2c4bff;
`;

const TyleItem = style.td`
    font-family: Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 13px;
    color: #b77daa;
`;

const DefaultItem = style.td`
  font-family: Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 13px;
`;

const RequiredItem = style.td`
  text-align: center;
`;


/** Component props table */
const Props = ({ props }) => (
  <Table cellPadding="0" cellSpacing="0">
    <TableHeader>
      <tr>
        <Label right>Property</Label>
        <Label>Type</Label>
        <Label>Required</Label>
        <Label>Default</Label>
        <Label>Description</Label>
      </tr>
    </TableHeader>
    <tbody>
      {
        Object.keys(props).map(key => (
          <Row key={key}>
            <PropNameItem bold prop>{key}</PropNameItem>
            <Item bold>{props[key].type.name}</Item>
            <Item>{props[key].required ? '✓' : ''}</Item>
            <Item>{props[key].defaultValue && props[key].defaultValue.value !== 'undefined' && props[key].defaultValue.value}</Item>
            <Item paragraph>
              <MarkdownToJsx>
                {props[key].description}
              </MarkdownToJsx>
            </Item>
          </Row>
        ))
      }
    </tbody>
  </Table>
);


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
