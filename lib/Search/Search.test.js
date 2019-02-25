"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _Search = _interopRequireDefault(require("./Search"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-filename-extension */
_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

describe('SearchComponent component', function () {
  it('onChange: should update state', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search.default, {
      onChange: function onChange() {
        return true;
      },
      onMoveUp: function onMoveUp() {
        return true;
      },
      onMoveDown: function onMoveDown() {
        return true;
      },
      onAddItem: function onAddItem() {
        return true;
      },
      onClose: function onClose() {
        return true;
      },
      placeholder: "Search"
    }));
    var instance = wrapper.instance();
    var event = {
      target: {
        value: 'Test'
      }
    };
    instance.onChange(event);
    expect(wrapper.state().search).toBe('Test');
  });
});