/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchComponent component', () => {
  it('onChange: should update state', () => {
    const wrapper = shallow(
      <Search
        onChange={() => true}
        onMoveUp={() => true}
        onMoveDown={() => true}
        onAddItem={() => true}
        onClose={() => true}
        placeholder={'Search'}
      />
    );
    const instance = wrapper.instance();
    const event = {
      target: {
        value: 'Test',
      },
    };
    instance.onChange(event);
    expect(wrapper.state().search).toBe('Test');
  });
});
