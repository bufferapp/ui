"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Styles = _interopRequireWildcard(require("./style"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Text = function Text(_ref) {
  var children = _ref.children,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["children", "type"]);

  switch (type) {
    case 'h1':
      return _react.default.createElement(Styles.H1, null, children);

    case 'h2':
      return _react.default.createElement(Styles.H2, null, children);

    case 'h3':
      return _react.default.createElement(Styles.H3, null, children);

    case 'p':
      return _react.default.createElement(Styles.Paragraph, null, children);

    case 'label':
      return _react.default.createElement(Styles.Label, props, children);

    case 'help':
      return _react.default.createElement(Styles.Help, props, children);

    default:
      return _react.default.createElement(Styles.Span, null, children);
  }
};

Text.propTypes = {
  /** The actual text content. */
  children: _propTypes.default.node,

  /** It changes the color of the text to red. <br><i>This is only used for `help`</i>. */
  hasError: _propTypes.default.bool,

  /** It's the name of the input it refers to. <br><i>This is only used for `label`.</i> */
  htmlFor: _propTypes.default.string,

  /** It change the color of the text. <br><i>This is only used for `label`</i>. */
  light: _propTypes.default.bool,

  /** The type can be: `h1`, `h2`, `h3`, `p`, `label`, `help`. <br><i>If omitted will return a `span`</i> */
  type: _propTypes.default.string
};
Text.defaultProps = {
  children: undefined,
  hasError: false,
  htmlFor: undefined,
  light: false,
  type: 'span'
};
var _default = Text;
exports.default = _default;