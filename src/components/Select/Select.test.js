/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Select from './Select'

Enzyme.configure({ adapter: new Adapter() })

describe('Select component', () => {
  it('openPopup: should open the closed popup', () => {
    const wrapper = mount(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    expect(wrapper.state().isOpen).toBe(false)
    instance.onButtonClick()
    expect(wrapper.state().isOpen).toBe(true)
  })

  it('closePopup: should close the open popup', () => {
    const wrapper = mount(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    instance.onButtonClick()
    expect(wrapper.state().isOpen).toBe(true)
    instance.closePopover({ target: null })
    expect(wrapper.state().isOpen).toBe(false)
  })

  it('onClose: should close the open popup', () => {
    const wrapper = mount(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    instance.onButtonClick()
    expect(wrapper.state().isOpen).toBe(true)
    instance.onClose()
    expect(wrapper.state().isOpen).toBe(false)
  })

  it('componentDidUpdate: run onButtonClick when isOpen prop changes', () => {
    const wrapper = shallow(
      <Select
        onSelectClick={() => true}
        isOpen={false}
        items={[]}
        label="Select"
      />,
    )
    const instance = wrapper.instance()

    const onButtonClickMock = jest.spyOn(instance, 'onButtonClick')
    expect(onButtonClickMock).toHaveBeenCalledTimes(0)

    wrapper.setProps({ isOpen: true })
    expect(onButtonClickMock).toHaveBeenCalledTimes(1)
  })

  it('componentDidUpdate: should run filterOnMenuOpen on open if clearSearchOnBlur is false and search value exists in state', () => {
    const wrapper = mount(
      <Select
        onSelectClick={() => true}
        items={[]}
        label="Select"
        clearSearchOnBlur={false}
      />,
    )
    const instance = wrapper.instance()
    wrapper.setState({ isOpen: false, searchValue: 'Test search value' })

    const onSearchChangeMock = jest.spyOn(instance, 'onSearchChange')
    const filterOnMenuOpenMock = jest.spyOn(instance, 'filterOnMenuOpen')
    const updateSearchMock = jest.fn()
    instance.searchInput = { updateSearch: updateSearchMock }

    wrapper.setState({ isOpen: true })

    expect(filterOnMenuOpenMock).toHaveBeenCalled()
    expect(updateSearchMock).toHaveBeenCalledWith('Test search value')
    expect(onSearchChangeMock).toHaveBeenCalledWith('Test search value')
  })

  it('componentDidUpdate: should clear search value on close if clearSearchOnBlur is true', () => {
    const wrapper = mount(
      <Select
        onSelectClick={() => true}
        items={[]}
        label="Select"
        clearSearchOnBlur
      />,
    )
    const instance = wrapper.instance()
    wrapper.setState({ isOpen: true, searchValue: 'Test search value' })

    const onSearchChangeMock = jest.spyOn(instance, 'onSearchChange')
    const clearSearchOnMenuCloseMock = jest.spyOn(
      instance,
      'clearSearchOnMenuClose',
    )
    const updateSearchMock = jest.fn()
    instance.searchInput = { updateSearch: updateSearchMock }

    wrapper.setState({ isOpen: false })

    expect(clearSearchOnMenuCloseMock).toHaveBeenCalled()
    expect(updateSearchMock).toHaveBeenCalledWith('')
    expect(onSearchChangeMock).toHaveBeenCalledWith('')

    expect(wrapper.state().searchValue).toBe('')
  })

  it('handleSelectOption: should call onSelectClick', () => {
    const onSelectClickSply = jest.fn()
    const wrapper = shallow(
      <Select onSelectClick={onSelectClickSply} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    instance.handleSelectOption()
    expect(onSelectClickSply).toBeCalled()
  })

  it('handleSelectOption: should call onSelectClick for custom items', () => {
    const onCustomItemClick = jest.fn()
    const items = [
      {
        id: '1',
        title: 'Item 1',
        selectedItemClick: () => {
          onCustomItemClick()
        },
      },
      {
        id: '2',
        title: 'Item 2',
        selectedItemClick: () => {
          onCustomItemClick()
        },
      },
    ]
    const SelectComponent = (
      <Select
        label="Select"
        onSelectClick={(selectedItem) => selectedItem.selectedItemClick()}
        items={items}
      />
    )
    const wrapper = shallow(SelectComponent)
    const instance = wrapper.instance()
    instance.handleSelectOption(items[0])
    expect(onCustomItemClick).toBeCalled()
  })

  it('onClick: should call stopImmediatePropagation', () => {
    const event = {
      stopPropagation: jest.fn(),
      nativeEvent: {
        stopImmediatePropagation: jest.fn(),
      },
    }
    const wrapper = shallow(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    instance.onClick(event)
    expect(event.stopPropagation).toBeCalled()
    expect(event.nativeEvent.stopImmediatePropagation).toBeCalled()
  })

  it('onSearchChange: should update search in state', () => {
    const wrapper = shallow(
      <Select
        onSelectClick={() => true}
        items={[
          {
            id: '1',
            title: 'Testing',
          },
          {
            id: '2',
            title: '123',
          },
        ]}
        label="Select"
      />,
    )
    const instance = wrapper.instance()
    instance.onSearchChange('Test')
    expect(wrapper.state().items).toEqual([
      {
        id: '1',
        title: 'Testing',
      },
    ])
  })

  it('onSearchChange: should only set isFiltering state to true if search value is provided', () => {
    const wrapper = shallow(
      <Select
        onSelectClick={() => true}
        items={[
          {
            id: '1',
            title: 'Testing',
          },
          {
            id: '2',
            title: '123',
          },
        ]}
        label="Select"
      />,
    )
    const instance = wrapper.instance()

    // Set isFiltering to true because searchValue has a value
    instance.onSearchChange('Test')
    expect(wrapper.state().isFiltering).toEqual(true)

    // Set isFiltering to false because searchValue has no value
    instance.onSearchChange('')
    expect(wrapper.state().isFiltering).toEqual(false)
  })

  it('onSearchChange: should re-order search in state based on matches with startsWith, then includes', () => {
    const wrapper = shallow(
      <Select
        onSelectClick={() => true}
        items={[
          {
            id: '1',
            title: 'Open',
          },
          {
            id: '2',
            title: 'Pending',
          },
          {
            id: '3',
            title: 'Closed',
          },
        ]}
        label="Select"
      />,
    )
    const instance = wrapper.instance()
    instance.onSearchChange('Pen')
    expect(wrapper.state().items).toEqual([
      {
        id: '2',
        title: 'Pending',
      },
      {
        id: '1',
        title: 'Open',
      },
    ])
  })

  it('onSearchChange: should exclude items from search if "hideOnSearch" property is true', () => {
    const wrapper = shallow(
      <Select
        onSelectClick={() => true}
        items={[
          {
            id: '1',
            title: 'Open',
            hideOnSearch: true,
          },
          {
            id: '2',
            title: 'Pending',
          },
          {
            id: '3',
            title: 'Closed',
          },
        ]}
        label="Select"
      />,
    )
    const instance = wrapper.instance()
    instance.onSearchChange('Pen')
    expect(wrapper.state().items).toEqual([
      {
        id: '2',
        title: 'Pending',
      },
    ])
  })

  it('onSearchChange: "hideOnSearch" property should only hide item if search value is provided', () => {
    const wrapper = shallow(
      <Select
        onSelectClick={() => true}
        items={[
          {
            id: '1',
            title: 'Open',
            hideOnSearch: true,
          },
          {
            id: '2',
            title: 'Pending',
          },
          {
            id: '3',
            title: 'Closed',
          },
        ]}
        label="Select"
      />,
    )
    const instance = wrapper.instance()
    instance.onSearchChange('')
    expect(wrapper.state().items).toEqual([
      {
        id: '1',
        title: 'Open',
        hideOnSearch: true,
      },
      {
        id: '2',
        title: 'Pending',
      },
      {
        id: '3',
        title: 'Closed',
      },
    ])
  })

  it('updateHoveredItemPosition: should update hoveredItem in state', () => {
    const wrapper = shallow(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    const items = [
      {
        id: '1',
        title: 'Testing',
      },
      {
        id: '2',
        title: '123',
      },
    ]
    const hoveredItem = 0
    const itemsLength = 2
    instance.updateHoveredItemPosition(hoveredItem, itemsLength, items)
    expect(wrapper.state().hoveredItem).toBe(1)
  })

  it('onAddItem: should not call handleSelectOption if hoveredItem is not set in state', () => {
    const wrapper = shallow(<Select items={[]} label="Select" />)
    const instance = wrapper.instance()

    const handleSelectOptionMock = jest.spyOn(instance, 'handleSelectOption')
    instance.onAddItem()
    expect(handleSelectOptionMock).toHaveBeenCalledTimes(0)
  })

  it('onAddItem: should call handleSelectOption if hoveredItem is set in state', () => {
    const items = [
      {
        id: '1',
        title: 'Testing',
      },
      {
        id: '2',
        title: '123',
      },
    ]

    const wrapper = shallow(<Select items={items} label="Select" />)
    const instance = wrapper.instance()
    instance.handleSelectOption = jest.fn()

    const hoveredItem = 0
    const itemsLength = 2
    instance.updateHoveredItemPosition(hoveredItem, itemsLength, items)

    instance.onAddItem()
    expect(instance.handleSelectOption).toBeCalled()
  })

  it('onMoveDown: should set the hoveredItem in state if there is none', () => {
    const wrapper = shallow(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    const spyFunc = jest.spyOn(instance, 'updateHoveredItemPosition')
    instance.onMoveDown()
    expect(spyFunc).toHaveBeenCalled()
    expect(wrapper.state().hoveredItem).toBe(0)
  })

  it('onMoveDown: should increase hoveredItem in state by +1', () => {
    const wrapper = shallow(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    wrapper.setState({
      hoveredItem: 0,
      items: [
        {
          id: '1',
          title: 'Testing',
        },
        {
          id: '2',
          title: '123',
        },
      ],
      isFiltering: true,
    })
    instance.onMoveDown()
    expect(wrapper.state().hoveredItem).toBe(1)
  })

  it('onMoveUp: should decrease hoveredItem in state by -1', () => {
    const wrapper = shallow(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )
    const instance = wrapper.instance()
    wrapper.setState({
      hoveredItem: 1,
      items: [
        {
          id: '1',
          title: 'Testing',
        },
        {
          id: '2',
          title: '123',
        },
      ],
      isFiltering: true,
    })
    instance.onMoveUp()
    expect(wrapper.state().hoveredItem).toBe(0)
  })

  it('Should remove listener on unmount', () => {
    document.removeEventListener = jest.fn()

    const wrapper = shallow(
      <Select onSelectClick={() => true} items={[]} label="Select" />,
    )

    wrapper.unmount()

    expect(document.removeEventListener).toHaveBeenCalled()
  })
})
