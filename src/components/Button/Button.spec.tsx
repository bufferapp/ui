/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import snap from 'jest-auto-snapshots'
import renderer from 'react-test-renderer'
import Button from './Button'
import 'jest-styled-components'

snap(Button, './Button.jsx')

test('Button renders styles properly', () => {
  const tree = renderer
    .create(<Button type="primary" onClick={() => {}} label="Primary" />)
    .toJSON()
  expect(tree).toHaveStyleRule('color', '#FFFFFF')
  expect(tree).toHaveStyleRule('cursor', 'pointer')
})

test('Disabled button is disabled', () => {
  const tree = renderer
    .create(
      <Button type="primary" onClick={() => {}} label="Primary" disabled />,
    )
    .toJSON()
  expect(tree).toHaveStyleRule('background-color', '#c6cbe4')
  expect(tree).toHaveStyleRule('cursor', 'not-allowed')
})

test('Primary default loading button has a darker blue background', () => {
  const tree = renderer
    .create(
      <Button type="primary" onClick={() => {}} label="Primary" loading />,
    )
    .toJSON()
  expect(tree).toHaveStyleRule('background-color', '#121E66')
})
