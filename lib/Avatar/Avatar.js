"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Styles = _interopRequireWildcard(require("./style"));

var _colors = require("../style/colors");

var _Icon = require("../Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return Styles.wrapper[props.size];
});

var Image = _styledComponents.default.img(_templateObject2(), function (props) {
  return Styles.image[props.type][props.size];
});

var socialIconMap = new Map([['instagram', function (_ref) {
  var size = _ref.size;
  return _react.default.createElement(Styles.SocialIconWrapper, {
    size: size,
    bgColor: _colors.instagram
  }, _react.default.createElement(_Icon.Instagram, {
    size: "small",
    color: "white"
  }));
}], ['facebook', function (_ref2) {
  var size = _ref2.size;
  return _react.default.createElement(Styles.SocialIconWrapper, {
    size: size,
    bgColor: _colors.facebook
  }, _react.default.createElement(_Icon.Facebook, {
    size: "small",
    color: "white"
  }));
}], ['twitter', function (_ref3) {
  var size = _ref3.size;
  return _react.default.createElement(Styles.SocialIconWrapper, {
    size: size,
    bgColor: _colors.twitter
  }, _react.default.createElement(_Icon.Twitter, {
    size: "small",
    color: "white"
  }));
}], ['linkedin', function (_ref4) {
  var size = _ref4.size;
  return _react.default.createElement(Styles.SocialIconWrapper, {
    size: size,
    bgColor: _colors.linkedin
  }, _react.default.createElement(_Icon.LinkedIn, {
    size: "small",
    color: "white"
  }));
}], ['pinterest', function (_ref5) {
  var size = _ref5.size;
  return _react.default.createElement(Styles.SocialIconWrapper, {
    size: size,
    bgColor: _colors.pinterest
  }, _react.default.createElement(_Icon.Pinterest, {
    size: "small",
    color: "white"
  }));
}], ['googleplus', function (_ref6) {
  var size = _ref6.size;
  return _react.default.createElement(Styles.SocialIconWrapper, {
    size: size,
    bgColor: _colors.googleplus
  }, _react.default.createElement(_Icon.GooglePlus, {
    size: "small",
    color: "white"
  }));
}]]);

var Avatar = function Avatar(_ref7) {
  var src = _ref7.src,
      alt = _ref7.alt,
      type = _ref7.type,
      size = _ref7.size,
      isOnline = _ref7.isOnline,
      network = _ref7.network;
  var SocialIcon = network && socialIconMap.get(network);
  return _react.default.createElement(Wrapper, {
    size: size
  }, SocialIcon && _react.default.createElement(SocialIcon, {
    size: size
  }), _react.default.createElement(Image, {
    size: size,
    type: type,
    src: src,
    alt: alt
  }));
};

Avatar.propTypes = {
  /** The source of the avatar image. */
  src: _propTypes.default.string.isRequired,

  /** The alt text for the avatar image. */
  alt: _propTypes.default.string.isRequired,

  /** Can be `'default'` (default, plain avatar), `'status'` (online/offline indicator) or `'social'` (has social network icon from the `network` prop). */
  type: _propTypes.default.oneOf(['default', 'social', 'status']),

  /** Can be `'small'`, `'medium'` or `'large'` (`32px`, `40px` and `48px` respectively). */
  size: _propTypes.default.oneOf(['large', 'medium', 'small']),

  /** Makes the status indictor green when `true`. Only applicable when `{ type: 'status' }` */
  isOnline: _propTypes.default.bool,

  /** Name of social network icon to overlay. (E.g., `'instagram'`). Only applicable when `{ type: 'social' }` */
  network: _propTypes.default.oneOf(['facebook', 'twitter', 'instagram', 'linkedin', 'google'])
};
Avatar.defaultProps = {
  type: 'default',
  size: 'small',
  isOnline: false,
  network: null
};
var _default = Avatar;
exports.default = _default;