"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _Select = _interopRequireDefault(require("./Select"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-filename-extension */
_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('SomeComponent component', function () {
  it('openPopup: should open the closed popup', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    expect(wrapper.state().isOpen).toBe(false);
    instance.onButtonClick();
    expect(wrapper.state().isOpen).toBe(true);
  });
  it('closePopup: should close the open popup', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    instance.onButtonClick();
    expect(wrapper.state().isOpen).toBe(true);
    instance.closePopover();
    expect(wrapper.state().isOpen).toBe(false);
  });
  it('onClose: should close the open popup', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    instance.onButtonClick();
    expect(wrapper.state().isOpen).toBe(true);
    instance.onClose();
    expect(wrapper.state().isOpen).toBe(false);
  });
  it('handleSelectOption: should call onSelectClick', function () {
    var onSelectClickSply = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: onSelectClickSply,
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    instance.handleSelectOption();
    expect(onSelectClickSply).toBeCalled();
  });
  it('onClick: should call stopImmediatePropagation', function () {
    var event = {
      stopPropagation: jest.fn(),
      nativeEvent: {
        stopImmediatePropagation: jest.fn()
      }
    };
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    instance.onClick(event);
    expect(event.stopPropagation).toBeCalled();
    expect(event.nativeEvent.stopImmediatePropagation).toBeCalled();
  });
  it('onSearchChange: should update search in state', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [{
        id: '1',
        title: 'Testing'
      }, {
        id: '2',
        title: '123'
      }],
      label: "Select"
    }));
    var instance = wrapper.instance();
    instance.onSearchChange('Test');
    expect(wrapper.state().items).toEqual([{
      id: '1',
      title: 'Testing'
    }]);
  });
  it('updateHoveredItemPosition: should update hoveredItem in state', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    var items = [{
      id: '1',
      title: 'Testing'
    }, {
      id: '2',
      title: '123'
    }];
    var hoveredItem = 0;
    var itemsLength = 2;
    instance.updateHoveredItemPosition(hoveredItem, itemsLength, items);
    expect(wrapper.state().hoveredItem).toBe(1);
  });
  it('onAddItem: should call onSelectClick', function () {
    var onSelectClick = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: onSelectClick,
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    instance.onAddItem();
    expect(onSelectClick).toBeCalled();
  });
  it('onMoveDown: should set the hoveredItem in state if there is none', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    var spyFunc = jest.spyOn(instance, 'updateHoveredItemPosition');
    instance.onMoveDown();
    expect(spyFunc).toHaveBeenCalled();
    expect(wrapper.state().hoveredItem).toBe(0);
  });
  it('onMoveDown: should increase hoveredItem in state by +1', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    wrapper.setState({
      hoveredItem: 0,
      items: [{
        id: '1',
        title: 'Testing'
      }, {
        id: '2',
        title: '123'
      }]
    });
    instance.onMoveDown();
    expect(wrapper.state().hoveredItem).toBe(1);
  });
  it('onMoveUp: should decrease hoveredItem in state by -1', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    var instance = wrapper.instance();
    wrapper.setState({
      hoveredItem: 1,
      items: [{
        id: '1',
        title: 'Testing'
      }, {
        id: '2',
        title: '123'
      }]
    });
    instance.onMoveUp();
    expect(wrapper.state().hoveredItem).toBe(0);
  });
  it('Should remove listener on unmount', function () {
    document.removeEventListener = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select.default, {
      onSelectClick: function onSelectClick() {
        return true;
      },
      items: [],
      label: "Select"
    }));
    wrapper.unmount();
    expect(document.removeEventListener).toHaveBeenCalled();
  });
});