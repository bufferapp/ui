/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropdownMenu from './DropdownMenu';

Enzyme.configure({ adapter: new Adapter() });

const items = [
  {
    id: '1',
    title: 'FAQ',
    onItemClick: jest.fn(),
  },
  {
    id: '2',
    title: 'Status',
    onItemClick: jest.fn(),
  },
  {
    id: '3',
    title: 'Pricing & Plans',
    onItemClick: jest.fn(),
  },
  {
    id: '4',
    title: 'Wishlist',
    onItemClick: jest.fn(),
  },
];

describe('DropdownMenu component', () => {
  it('should open the closed popup and select an option', () => {
    const wrapper = mount(
      <DropdownMenu
        ariaLabel="Help Menu"
        ariaLabelPopup="Help"
        menubarItem={<div>Help</div>}
        items={items}
        xPosition="left"
      />
    );

    const instance = wrapper.instance();
    expect(wrapper.state().isOpen).toBe(false);

    instance.togglePopup();
    expect(wrapper.state().isOpen).toBe(true);

    const menuItems = wrapper.find('button');
    expect(menuItems.length).toBe(4);

    const firstButton = menuItems.at(0);
    firstButton.simulate('click');

    expect(instance.props.items[0].onItemClick).toHaveBeenCalled();
    expect(instance.props.items[0].onItemClick).toHaveBeenCalledTimes(1);
  });
});
