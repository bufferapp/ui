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
    expect(wrapper.state().isOpen).toBe(null);
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

  it('onClose: should close the open popup', () => {
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    instance.onButtonClick();
    expect(wrapper.state().isOpen).toBe(true);
    instance.onClose();
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

  it('onSearchChange: should update search in state', () => {
    const wrapper = shallow(<Select
      onSelectClick={() => true}
      items={[
        {
          id: '1', title: 'Testing',
        },
        {
          id: '2', title: '123',
        },
      ]}
      label="Select"
    />);
    const instance = wrapper.instance();
    instance.onSearchChange('Test');
    expect(wrapper.state().items).toEqual([{
      id: '1', title: 'Testing',
    }]);
  });


  it('updateHoveredItemPosition: should update hoveredItem in state', () => {
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    const items = [
      {
        id: '1', title: 'Testing',
      },
      {
        id: '2', title: '123',
      },
    ];
    const hoveredItem = 0;
    const itemsLength = 2;
    instance.updateHoveredItemPosition(hoveredItem, itemsLength, items);
    expect(wrapper.state().hoveredItem).toBe(1);
  });

  it('onAddItem: should call onSelectClick', () => {
    const onSelectClick = jest.fn();
    const wrapper = shallow(<Select onSelectClick={onSelectClick} items={[]} label="Select" />);
    const instance = wrapper.instance();
    instance.onAddItem();
    expect(onSelectClick).toBeCalled();
  });

  it('onMoveDown: should set the hoveredItem in state if there is none', () => {
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    const spyFunc = jest.spyOn(instance, 'updateHoveredItemPosition');
    instance.onMoveDown();
    expect(spyFunc).toHaveBeenCalled();
    expect(wrapper.state().hoveredItem).toBe(0);
  });

  it('onMoveDown: should increase hoveredItem in state by +1', () => {
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    wrapper.setState({
      hoveredItem: 0,
      items: [
        {
          id: '1', title: 'Testing',
        },
        {
          id: '2', title: '123',
        },
      ],
      isFiltering: true
    });
    instance.onMoveDown();
    expect(wrapper.state().hoveredItem).toBe(1);
  });

  it('onMoveUp: should decrease hoveredItem in state by -1', () => {
    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);
    const instance = wrapper.instance();
    wrapper.setState({
      hoveredItem: 1,
      items: [
        {
          id: '1', title: 'Testing',
        },
        {
          id: '2', title: '123',
        },
      ],
      isFiltering: true
    });
    instance.onMoveUp();
    expect(wrapper.state().hoveredItem).toBe(0);
  });

  it('Should remove listener on unmount', () => {
    document.removeEventListener = jest.fn();

    const wrapper = shallow(<Select onSelectClick={() => true} items={[]} label="Select" />);

    wrapper.unmount();

    expect(document.removeEventListener).toHaveBeenCalled();
  });
});
