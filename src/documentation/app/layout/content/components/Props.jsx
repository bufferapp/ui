import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';

const Table = style.table`
    width: 100%;
`;

const Label = style.th`
    text-align: left;
    padding: 10px 0px;
    padding-right: 25px;
    font-size: 14px;
`;

const Row = style.tr`
    padding: 10px 0px;
`;

const Item = style.td`
    padding: 10px 0px;
    padding-right: 25px;
    font-size: 14px;
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
  <Table>
    <tbody>
      <tr>
        <Label>Name</Label>
        <Label>Type</Label>
        <Label>Default</Label>
        <Label>Required</Label>
        <Label>Description</Label>
      </tr>
    </tbody>
    <tbody>
      {
        Object.keys(props).map(key => (
          <Row key={key}>
            <NameItem>{key}</NameItem>
            <TyleItem>{props[key].type.name}</TyleItem>
            <DefaultItem>{props[key].defaultValue && props[key].defaultValue.value}</DefaultItem>
            <RequiredItem>{props[key].required && '✅'}</RequiredItem>
            <Item>{props[key].description}</Item>
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
