"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../../Icon");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectItem = function SelectItem(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick,
      hovered = _ref.hovered,
      keyMap = _ref.keyMap,
      hasSelectedItems = _ref.hasSelectedItems,
      getItemId = _ref.getItemId;
  return _react.default.createElement(_style.SelectItemStyled, {
    onClick: item.onItemClick || onClick,
    hovered: hovered,
    id: getItemId(item)
  }, _react.default.createElement(_style.SelectItemLabel, null, item.selected && _react.default.createElement(_Icon.Flag, {
    color: "gray"
  }), _react.default.createElement(_style.SelectItemIcon, {
    hovered: hovered
  }, item.component), _react.default.createElement(_style.SelectItemTitle, {
    moveRight: hasSelectedItems && !item.selected
  }, item[keyMap ? keyMap.title : 'title'])));
};

SelectItem.propTypes = {
  /** Item to render */
  item: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    onItemClick: _propTypes.default.func
  }).isRequired,

  /** On click function */
  onClick: _propTypes.default.func.isRequired,

  /** Get the id of the item */
  getItemId: _propTypes.default.func.isRequired,

  /** Is the item selected */
  hovered: _propTypes.default.bool,

  /** Custom keys to used in the Items array */
  keyMap: _propTypes.default.shape({
    id: _propTypes.default.string,
    title: _propTypes.default.string
  }),

  /** Does the Select have selected items to adjust the margin */
  hasSelectedItems: _propTypes.default.bool
};
SelectItem.defaultProps = {
  hovered: undefined,
  keyMap: undefined,
  hasSelectedItems: undefined
};
var _default = SelectItem;
exports.default = _default;