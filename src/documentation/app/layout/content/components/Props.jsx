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
`;

const Row = style.tr`
    padding: 10px 0px;
`;

const Item = style.td`
    padding: 10px 0px;
    padding-right: 25px;
    font-size: 14px;
`;

/** Component props table */
const Props = ({ props }) => (
  <Table>
    <tbody>
      <tr>
        <Label>Name</Label>
        <Label>Description</Label>
        <Label>Type</Label>
        <Label>Default</Label>
        <Label>Required</Label>
      </tr>
    </tbody>
    <tbody>
      {
        Object.keys(props).map(key => (
          <Row key={key}>
            <Item>{key}</Item>
            <Item>{props[key].description}</Item>
            <Item>{props[key].type.name}</Item>
            <Item>{props[key].defaultValue && props[key].defaultValue.value}</Item>
            <Item>{props[key].required && 'X'}</Item>
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
