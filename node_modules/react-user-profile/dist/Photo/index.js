"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", "rem;\n  height: ", "rem;\n  object-fit: cover;\n  border-radius: 50%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var dimensions = {
  small: 2.5,
  big: 4.37
};

var _default = _styledComponents.default.img(_templateObject(), function (props) {
  return dimensions[props.size];
}, function (props) {
  return dimensions[props.size];
});

exports.default = _default;
//# sourceMappingURL=index.js.map