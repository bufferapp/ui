import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropdownMenu from './DropdownMenu';
import { keyCode } from './keyCode';
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
        const wrapper = mount(React.createElement(DropdownMenu, { ariaLabel: "Help Menu", ariaLabelPopup: "Help", menubarItem: React.createElement("a", { href: "/#" }, "Help"), items: items, xPosition: "left" }));
        const instance = wrapper.instance();
        expect(wrapper.state().isOpen).toBe(false);
        instance.togglePopup();
        expect(wrapper.state().isOpen).toBe(true);
        const menuItems = wrapper.find('button');
        expect(menuItems).toHaveLength(4);
        const firstButton = menuItems.at(0);
        firstButton.simulate('click');
        expect(instance.props.items[0].onItemClick).toHaveBeenCalled();
        expect(instance.props.items[0].onItemClick).toHaveBeenCalledTimes(1);
        wrapper.unmount();
    });
    it('should navigate menu with with keyboard and select an option', () => {
        const wrapper = mount(React.createElement(DropdownMenu, { ariaLabel: "Help Menu", ariaLabelPopup: "Help", menubarItem: React.createElement("a", { href: "/#" }, "Help Menu"), items: items, xPosition: "left" }));
        const dropdownInstance = wrapper.instance();
        const helpMenuButton = wrapper.find('a').at(0);
        helpMenuButton.simulate('keydown', {
            key: 'Enter',
            keyCode: keyCode.RETURN,
        });
        expect(wrapper.state().isOpen).toBe(true);
        const popupMenu = wrapper.find('PopupMenu');
        const popupMenuInstance = popupMenu.instance();
        expect(popupMenuInstance.state.focusedItem).toBe(0);
        popupMenu.simulate('keydown', { key: 'Down', keyCode: keyCode.DOWN });
        expect(popupMenuInstance.state.focusedItem).toBe(1);
        popupMenu.simulate('keydown', { key: 'Down', keyCode: keyCode.DOWN });
        expect(popupMenuInstance.state.focusedItem).toBe(2);
        const menuItems = wrapper.find('button');
        const itemButton = menuItems.at(2);
        itemButton.simulate('keydown', { key: 'Enter', keyCode: keyCode.RETURN });
        expect(dropdownInstance.props.items[2].onItemClick).toHaveBeenCalled();
        expect(dropdownInstance.props.items[2].onItemClick).toHaveBeenCalledTimes(1);
        popupMenu.simulate('keydown', { key: 'Escape', keyCode: keyCode.ESC });
        expect(wrapper.state().isOpen).toBe(false);
        wrapper.unmount();
    });
});
//# sourceMappingURL=DropdownMenu.test.js.map