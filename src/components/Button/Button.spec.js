/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import snap from 'jest-auto-snapshots';
import renderer from 'react-test-renderer';
import Button from './Button';
import 'jest-styled-components';

snap(Button, './Button.jsx');

test('Button renders styles properly', () => {
  const tree = renderer.create(<Button type="primary" onClick={() => {}} label="Primary" />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', '#FFFFFF');
});
