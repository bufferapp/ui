"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _SidebarSection = _interopRequireDefault(require("./SidebarSection/SidebarSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
  var sections = _ref.sections;
  return _react.default.createElement(_style.SidebarStyled, null, sections.map(function (_ref2, idx) {
    var name = _ref2.name,
        items = _ref2.items;
    return _react.default.createElement(_SidebarSection.default, {
      key: idx,
      name: name,
      items: items
    });
  }));
};

Sidebar.propTypes = {
  sections: _propTypes.default.arrayOf(_propTypes.default.object)
};
Sidebar.defaultProps = {
  sections: []
};
var _default = Sidebar;
exports.default = _default;