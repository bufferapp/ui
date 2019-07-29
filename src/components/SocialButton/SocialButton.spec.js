/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import snap from 'jest-auto-snapshots';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SocialButton from './SocialButton';

snap(SocialButton, './SocialButton.jsx');

test('Disabled button is disabled', () => {
  const tree = renderer.create(<SocialButton channel="twitter" onClick={() => {}} disabled />).toJSON();
  expect(tree).toHaveStyleRule('cursor', 'not-allowed');
});