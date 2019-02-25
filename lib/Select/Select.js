"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _style = require("./style");

var _SelectItem = _interopRequireDefault(require("./SelectItem/SelectItem"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _style2 = require("../Button/style");

var _ChevronDown = _interopRequireDefault(require("../Icon/Icons/ChevronDown"));

var _Search = _interopRequireDefault(require("../Search/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Select component that opens a popup menu on click and displays items that can be selected */
var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "keyDownPressed", function (e) {
      var shortcutsEnabled = _this.props.shortcutsEnabled;
      if (!shortcutsEnabled) return;

      switch (e.which) {
        case 40:
          // Arrow down
          return _this.handleKeyPress(e, _this.onMoveDown);

        case 38:
          // Arrow up
          return _this.handleKeyPress(e, _this.onMoveUp);

        case 13:
          // Enter
          return _this.handleKeyPress(e, _this.onAddItem);

        case 27:
          // Esc
          return _this.handleKeyPress(e, _this.onClose);

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event, keyHandler) {
      event.preventDefault();
      event.stopPropagation();
      keyHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "closePopover", function (e) {
      if (_this.selectNode && _this.selectNode.contains(e.target)) return;
      var isOpen = _this.state.isOpen;

      if (isOpen) {
        _this.setState({
          isOpen: false,
          hoveredItem: undefined
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectOption", function (option, event) {
      var _this$props = _this.props,
          onSelectClick = _this$props.onSelectClick,
          multiSelect = _this$props.multiSelect;
      var items = _this.state.items;
      onSelectClick(option, event);
      var selectedIndex = items.findIndex(function (x) {
        return x.selected === true;
      });
      var deselectItems = !multiSelect && selectedIndex > -1 ? (0, _immutabilityHelper.default)(items, _defineProperty({}, selectedIndex, {
        selected: {
          $set: false
        }
      })) : items;
      var optionIndex = deselectItems.findIndex(function (x) {
        return x.id === option.id;
      });

      _this.setState({
        isOpen: multiSelect,
        items: optionIndex > -1 ? (0, _immutabilityHelper.default)(deselectItems, _defineProperty({}, optionIndex, {
          selected: {
            $set: !option.selected
          }
        })) : items
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMoveUp", function () {
      var items = _this.state.items;
      var hoveredItem = _this.state.hoveredItem;
      var itemsLength = items.length;

      for (var i = hoveredItem - 1; i < itemsLength && itemsLength > 0 && i >= 0; i -= 1) {
        if (items[i]) {
          _this.setState({
            hoveredItem: i % itemsLength
          });

          _this.scrollToItem(_this.itemsNode, document.getElementById(_this.getItemId(items[i])));

          break;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMoveDown", function () {
      var items = _this.state.items;
      var hoveredItem = _this.state.hoveredItem;
      var itemsLength = items.length;

      if (!hoveredItem) {
        _this.setState({
          hoveredItem: 0
        }, function () {
          return _this.updateHoveredItemPosition(hoveredItem, itemsLength, items);
        });
      } else {
        _this.updateHoveredItemPosition(hoveredItem, itemsLength, items);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddItem", function () {
      var onSelectClick = _this.props.onSelectClick;
      var _this$state = _this.state,
          items = _this$state.items,
          hoveredItem = _this$state.hoveredItem;
      var selectedItem = items[hoveredItem];

      if (selectedItem && selectedItem.onItemClick) {
        selectedItem.onItemClick(selectedItem);
      } else {
        onSelectClick(items[hoveredItem]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateHoveredItemPosition", function (hoveredItem, itemsLength, items) {
      for (var i = hoveredItem + 1; i <= itemsLength && itemsLength > 0 && i > 0; i += 1) {
        if (i === itemsLength) {
          _this.setState({
            hoveredItem: 0
          });

          _this.scrollToItem(_this.itemsNode, document.getElementById(_this.getItemId(items[i])));

          break;
        }

        if (items[i]) {
          _this.setState({
            hoveredItem: i % itemsLength
          });

          _this.scrollToItem(_this.itemsNode, document.getElementById(_this.getItemId(items[i])));

          break;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToItem", function (parent, child) {
      if (!parent || !child) return; // Where is the parent on page

      var parentRect = parent.getBoundingClientRect(); // What can you see?

      var parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth
      }; // Where is the child

      var childRect = child.getBoundingClientRect(); // Is the child viewable?

      var isViewable = childRect.top >= parentRect.top && childRect.top <= parentRect.top + parentViewableArea.height; // if you can't see the child try to scroll parent

      if (!isViewable) {
        // scroll by offset relative to parent
        parent.scrollTop = childRect.top + parent.scrollTop - parentRect.top;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (searchValue) {
      var _this$props2 = _this.props,
          items = _this$props2.items,
          keyMap = _this$props2.keyMap;
      var searchFiled = keyMap ? keyMap.title : 'title';
      var filteredItems = items.filter(function (item) {
        return (0, _lodash.includes)(item[searchFiled].toLowerCase(), searchValue.toLowerCase());
      });

      _this.setState({
        items: filteredItems
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getItemId", function (item) {
      if (!item) return;
      var keyMap = _this.props.keyMap;
      return item[keyMap ? keyMap.id : 'id'];
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectButton", function () {
      var _this$props3 = _this.props,
          isSplit = _this$props3.isSplit,
          customButton = _this$props3.customButton,
          type = _this$props3.type,
          size = _this$props3.size,
          disabled = _this$props3.disabled,
          icon = _this$props3.icon,
          label = _this$props3.label;
      var items = _this.state.items;

      if (isSplit) {
        return _react.default.createElement(_style2.ButtonSelect, {
          type: type,
          disabled: disabled,
          onClick: !disabled ? _this.onButtonClick : undefined
        }, _react.default.createElement(_ChevronDown.default, {
          color: type === 'primary' && !disabled ? 'white' : 'grayDark'
        }));
      }

      if (customButton) {
        return customButton(_this.onButtonClick);
      }

      return _react.default.createElement(_Button.default, {
        size: size,
        items: items,
        disabled: disabled,
        type: type,
        label: label,
        icon: icon,
        onClick: _this.onButtonClick,
        isSelect: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectPopup", function () {
      var _this$props4 = _this.props,
          position = _this$props4.position,
          hasSearch = _this$props4.hasSearch,
          customButton = _this$props4.customButton,
          keyMap = _this$props4.keyMap,
          horizontalOffset = _this$props4.horizontalOffset;
      var _this$state2 = _this.state,
          isOpen = _this$state2.isOpen,
          hoveredItem = _this$state2.hoveredItem,
          items = _this$state2.items;
      return _react.default.createElement(_style.SelectStyled, {
        isOpen: isOpen,
        position: position,
        isMenu: !!customButton,
        horizontalOffset: horizontalOffset
      }, hasSearch && _react.default.createElement(_Search.default, {
        ref: function ref(node) {
          return _this.searchInputNode = node;
        },
        onChange: _this.onSearchChange,
        onAddItem: _this.onAddItem,
        onClose: _this.onClose
      }), _react.default.createElement(_style.SelectItems, {
        ref: function ref(itemsNode) {
          return _this.itemsNode = itemsNode;
        }
      }, items.map(function (item, idx) {
        return _react.default.createElement(_react.Fragment, {
          key: item[keyMap ? keyMap.id : 'id'] || "id-".concat(idx)
        }, item.hasDivider && _react.default.createElement(_style.SelectItemDivider, null), _react.default.createElement(_SelectItem.default, {
          hovered: hoveredItem === idx,
          key: _this.getItemId(item),
          getItemId: _this.getItemId,
          item: item,
          keyMap: keyMap,
          hasSelectedItems: (0, _lodash.some)(items, {
            selected: true
          }),
          onClick: function onClick(event) {
            return _this.handleSelectOption(item, event);
          }
        }));
      })));
    });

    _this.onButtonClick = _this.onButtonClick.bind(_assertThisInitialized(_this));
    _this.closePopover = _this.closePopover.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      items: props.items
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // When the selector is open and users click anywhere on the page,
      // the selector should close
      // Set capture to true so an open select will close when another select gets opened
      document.addEventListener('click', this.closePopover, true); // catch the keypress to move the selected items up or down

      if (this.selectNode) {
        this.selectNode.addEventListener('keydown', this.keyDownPressed);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.closePopover, true);

      if (this.selectNode) {
        this.selectNode.removeEventListener('keydown', this.keyDownPressed);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          isSplit = _this$props5.isSplit,
          position = _this$props5.position,
          customButton = _this$props5.customButton;
      var isOpen = this.state.isOpen;
      return _react.default.createElement(_style.Wrapper, {
        role: "button",
        onClick: this.onClick,
        onKeyUp: this.onClick,
        tabIndex: 0,
        isSplit: isSplit,
        ref: function ref(selectNode) {
          return _this2.selectNode = selectNode;
        }
      }, this.renderSelectButton(), this.renderSelectPopup(), !customButton && _react.default.createElement(_style.Arrow, {
        isOpen: isOpen,
        isSplit: isSplit,
        position: position
      }));
    }
  }]);

  return Select;
}(_react.default.Component);

exports.default = Select;
Select.propTypes = {
  /** Is the button disabled */
  disabled: _propTypes.default.bool,

  /** Function to call on selected item click */
  onSelectClick: _propTypes.default.func,

  /** Label to display on the Select button */
  label: _propTypes.default.string,

  /** Items to display in the popup */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    title: _propTypes.default.string
  })).isRequired,

  /** Is the Select component part of the Split Button */
  isSplit: _propTypes.default.bool,

  /** Type of the select component  */
  type: _propTypes.default.oneOf(['primary', 'secondary']),

  /** Size of the Button */
  size: _propTypes.default.oneOf(['small', 'large', 'medium']),

  /** Position of the popup */
  position: _propTypes.default.oneOf(['top', 'bottom']),

  /** Amount to offset the popup horizontally, can be any valid CSS value (e.g., `10px`, `-5px`) */
  horizontalOffset: _propTypes.default.string,

  /** Icon to show in the Button */
  icon: _propTypes.default.node,

  /** Does the Select have a search bar */
  hasSearch: _propTypes.default.bool,

  /** Custom Button component */
  customButton: _propTypes.default.func,

  /** Custom keys to used in the Items array */
  keyMap: _propTypes.default.shape({
    id: _propTypes.default.string,
    title: _propTypes.default.string
  }),

  /** Can the select have multiple items selected */
  multiSelect: _propTypes.default.bool,

  /** If false don't enable keyboard navigation */
  shortcutsEnabled: _propTypes.default.bool
  /** Search placeholder */
  // searchPlaceholder: PropTypes.string,

};
Select.defaultProps = {
  label: '',
  isSplit: false,
  type: 'secondary',
  size: 'medium',
  position: 'bottom',
  horizontalOffset: '0',
  disabled: undefined,
  icon: undefined,
  hasSearch: false,
  customButton: undefined,
  onSelectClick: undefined,
  keyMap: undefined,
  multiSelect: undefined,
  shortcutsEnabled: true // searchPlaceholder: 'Search',

};