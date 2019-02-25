"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Styles = _interopRequireWildcard(require("./style"));

var _FormBlock = _interopRequireDefault(require("../FormBlock"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormStyled = _styledComponents.default.form(_templateObject(), Styles.FormBase);

var FormTitle = _styledComponents.default.h3(_templateObject2(), Styles.title);

var FormSubTitle = _styledComponents.default.p(_templateObject3(), Styles.subTitle);

var Form = function Form(_ref) {
  var header = _ref.header,
      onSubmit = _ref.onSubmit,
      children = _ref.children;
  return _react.default.createElement(FormStyled, {
    onSubmit: onSubmit
  }, header && _react.default.createElement(_FormBlock.default, null, _react.default.createElement(FormTitle, null, header.title), _react.default.createElement(FormSubTitle, null, header.subTitle)), children);
};

Form.propTypes = {
  header: _propTypes.default.shape({
    title: _propTypes.default.string,
    subTitle: _propTypes.default.string
  }),
  onSubmit: _propTypes.default.func.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node])
};
Form.defaultProps = {
  header: null,
  children: null
};
var _default = Form;
exports.default = _default;