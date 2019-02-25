"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SidebarItem = _interopRequireDefault(require("../SidebarItem/SidebarItem"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarSection = function SidebarSection(_ref) {
  var name = _ref.name,
      items = _ref.items;
  return _react.default.createElement(_style.SidebarSectionStyled, null, _react.default.createElement(_style.Header, null, name), _react.default.createElement("div", null, items.map(function (_ref2, idx) {
    var _ref2$icon = _ref2.icon,
        icon = _ref2$icon === void 0 ? null : _ref2$icon,
        label = _ref2.label,
        url = _ref2.url;
    return _react.default.createElement(_SidebarItem.default, {
      key: idx,
      icon: icon,
      label: label,
      url: url
    });
  })));
};

SidebarSection.propTypes = {
  name: _propTypes.default.string.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
};
var _default = SidebarSection;
exports.default = _default;