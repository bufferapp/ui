/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from './Select';

Enzyme.configure({ adapter: new Adapter() });

describe('SomeComponent component', () => {
  it('openPopup: should open the closed popup', () => {
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    expect(wrapper.state().isOpen).toBe(false);
    instance.onButtonClick();
    expect(wrapper.state().isOpen).toBe(true);
  });

  it('closePopup: should close the open popup', () => {
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    instance.onButtonClick();
    expect(wrapper.state().isOpen).toBe(true);
    instance.closePopover();
    expect(wrapper.state().isOpen).toBe(false);
  });

  it('handleSelectOption: should call onSelectClick', () => {
    const onSelectClickSply = jest.fn();
    const wrapper = shallow(<Select onSelectClick={onSelectClickSply} items={[]} label="Select" />);
    const instance = wrapper.instance();
    instance.handleSelectOption();
    expect(onSelectClickSply).toBeCalled();
  });


  it('onClick: should call stopImmediatePropagation', () => {
    const event = {
      stopPropagation: jest.fn(),
      nativeEvent: {
        stopImmediatePropagation: jest.fn(),
      },
    };
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    instance.onClick(event);
    expect(event.stopPropagation).toBeCalled();
    expect(event.nativeEvent.stopImmediatePropagation).toBeCalled();
  });
});
