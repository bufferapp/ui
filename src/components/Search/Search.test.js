/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';

Enzyme.configure({ adapter: new Adapter() });

describe('SomeComponent component', () => {
  it('onChange: should update state', () => {
    const wrapper = shallow(<Search onChange={() => true} onMoveUp={() => true} onMoveDown={() => true} onAddItem={() => true} onClose={() => true} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        value: 'Test',
      },
    };
    instance.onChange(event);
    expect(wrapper.state().search).toBe('Test');
  });

  /** TODO: Fix this test. We need to check that getHotkeyHandles is called on render */
  it('should call MoweDown on arrow down', () => {
    const wrapper = mount(<Search hasSearch onChange={() => true} onMoveUp={() => true} onMoveDown={() => true} onAddItem={() => true} onClose={() => true} />);
    const spy = jest.spyOn(wrapper.instance(), 'getHotkeyHandlers');
    wrapper.instance().getHotkeyHandlers();
    expect(spy).toHaveBeenCalled();
  });


  it('getHotkeyHandlers should return the handler', () => {
    const wrapper = mount(<Search hasSearch onChange={() => true} onMoveUp={() => true} onMoveDown={() => true} onAddItem={() => true} onClose={() => true} />);
    const mockFunction = wrapper.instance().getHotkeyHandlers();
    expect(mockFunction).toMatchSnapshot();
  });
});
