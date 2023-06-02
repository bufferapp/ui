/* eslint-disable react/jsx-filename-extension */
import React from 'react'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'jest... Remove this comment to see the full error message
import snap from 'jest-auto-snapshots'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import SocialButton from './SocialButton'

snap(SocialButton, './SocialButton.tsx')

test('Disabled button is disabled', () => {
  const tree = renderer
    .create(<SocialButton channel="twitter" onClick={() => {}} disabled />)
    .toJSON()
  expect(tree).toHaveStyleRule('cursor', 'not-allowed')
})
