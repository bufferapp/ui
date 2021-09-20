/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchComponent component', () => {
  it('onChange: should not update state if controlled', () => {
    const wrapper = shallow(
      <Search
        placeholder="Search"
        value="Controlled"
        onChange={() => true}
      />
    );
    const instance = wrapper.instance();
    const event = {
      target: {
        value: 'Uncontrolled',
      },
    };
    instance.onChange(event);
    expect(wrapper.state().search).toBe('Controlled');
  });

  it('onChange: should update state if uncontrolled', () => {
    const wrapper = shallow(
      <Search
        placeholder="Search"
        onChange={() => true}
      />
    );
    const instance = wrapper.instance();
    expect(wrapper.state().search).toBe('');
    const event = {
      target: {
        value: 'Test',
      },
    };
    instance.onChange(event);
    expect(wrapper.state().search).toBe('Test');
  })
});
