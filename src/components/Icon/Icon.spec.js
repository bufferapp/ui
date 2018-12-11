/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import snap from 'jest-auto-snapshots';
import renderer from 'react-test-renderer';
import Icon from './Icon';
import ChevronDown from './Icons/ChevronDown';
import 'jest-styled-components';

snap(Icon, './Icon.jsx');

test('Button renders styles properly', () => {
  const tree = renderer.create(<Icon type="primary" size="medium"><ChevronDown /></Icon>).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '18px');
});
