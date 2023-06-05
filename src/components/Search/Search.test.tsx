/* eslint-disable react/jsx-filename-extension */
import React from 'react'
// @ts-expect-error TS(7016) FIXME: Could not find a declaration file for module 'enzy... Remove this comment to see the full error message
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Search from './Search'

Enzyme.configure({ adapter: new Adapter() })

describe('SearchComponent component', () => {
  it('onChange: should update state', () => {
    const wrapper = shallow(
      <Search
        // @ts-expect-error TS(2769) FIXME: No overload matches this call.
        onChange={() => true}
        onMoveUp={() => true}
        onMoveDown={() => true}
        onAddItem={() => true}
        onClose={() => true}
        placeholder="Search"
      />,
    )
    const instance = wrapper.instance()
    const event = {
      target: {
        value: 'Test',
      },
    }
    instance.onChange(event)
    expect(wrapper.state().search).toBe('Test')
  })
})
