"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIconWrapper = exports.wrapper = exports.image = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  background: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  transform: translateX(8px) translateY(", "px);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: ", "px;\n    height: ", "px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n    height: ", "px;\n    border-radius: 100%;\n    -webkit-mask-size: cover;\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getImageCss = function getImageCss(_ref) {
  var size = _ref.size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type;
  return (0, _styledComponents.css)(_templateObject(), size, size, type === 'social' && "-webkit-mask-image: url(https://static.buffer.com/ui/avatar-mask-".concat(size, ".svg);"));
};

var image = {
  default: {
    small: getImageCss({
      size: 32
    }),
    medium: getImageCss({
      size: 40
    }),
    large: getImageCss({
      size: 48
    })
  },
  social: {
    small: getImageCss({
      size: 32,
      type: 'social'
    }),
    medium: getImageCss({
      size: 40,
      type: 'social'
    }),
    large: getImageCss({
      size: 48,
      type: 'social'
    })
  }
};
exports.image = image;

var getWrapperCss = function getWrapperCss(_ref2) {
  var size = _ref2.size;
  return (0, _styledComponents.css)(_templateObject2(), size, size);
};

var wrapper = {
  small: getWrapperCss({
    size: 32
  }),
  medium: getWrapperCss({
    size: 40
  }),
  large: getWrapperCss({
    size: 48
  })
};
exports.wrapper = wrapper;

var SocialIconWrapper = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.bgColor ? props.bgColor : '#777';
}, function (props) {
  return props.size === 'small' ? '0' : '-2';
});

exports.SocialIconWrapper = SocialIconWrapper;