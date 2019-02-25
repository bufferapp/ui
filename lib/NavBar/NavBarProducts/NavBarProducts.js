"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Plus = _interopRequireDefault(require("../../Icon/Icons/Plus"));

var _Compare = _interopRequireDefault(require("../../Icon/Icons/Compare"));

var _Message = _interopRequireDefault(require("../../Icon/Icons/Message"));

var _colors = require("../../style/colors");

var _fonts = require("../../style/fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 8px;\n  vertical-align: middle;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: #fff;\n  padding: 0 20px;\n  font-size: 16px;\n  font-weight: ", ";\n  text-decoration: none;\n  align-self: center;\n  color: ", ";\n  &:hover {\n    color: #fff;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-left: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StlyedNavBarProduct = _styledComponents.default.nav(_templateObject());

var ProductLink = _styledComponents.default.a(_templateObject2(), _fonts.fontWeightMedium, function (props) {
  return props.active ? '#fff' : _colors.gray;
});

var ProductText = _styledComponents.default.span(_templateObject3());

var NavBarProduct = function NavBarProduct(_ref) {
  var activeProduct = _ref.activeProduct;
  return _react.default.createElement(StlyedNavBarProduct, null, _react.default.createElement(ProductLink, {
    active: activeProduct === 'publish',
    href: activeProduct !== 'publish' ? 'https://publish.buffer.com' : '/'
  }, _react.default.createElement(_Plus.default, {
    verticalAlign: "middle"
  }), _react.default.createElement(ProductText, null, "Publish")), _react.default.createElement(ProductLink, {
    active: activeProduct === 'reply',
    href: activeProduct !== 'reply' ? 'https://reply.buffer.com' : '/'
  }, _react.default.createElement(_Message.default, {
    verticalAlign: "middle"
  }), _react.default.createElement(ProductText, null, "Reply")), _react.default.createElement(ProductLink, {
    active: activeProduct === 'analyze',
    href: activeProduct !== 'analyze' ? 'https://analyze.buffer.com' : '/'
  }, _react.default.createElement(_Compare.default, {
    verticalAlign: "middle"
  }), _react.default.createElement(ProductText, null, "Analyze")));
};

NavBarProduct.propTypes = {
  activeProduct: _propTypes.default.oneOf(['publish', 'analyze', 'reply'])
};
NavBarProduct.defaultProps = {
  activeProduct: 'publish'
};
var _default = NavBarProduct;
exports.default = _default;