"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareWindow = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -2.7rem;\n  right: 0;\n  padding: 0.8rem 2rem;\n  background: #ffff;\n  box-shadow: 0 0 1rem 8px rgba(172, 172, 172, 0.5);\n  border-radius: 0.31rem;\n  transition: all 0.25s;\n\n  visibility: ", ";\n  opacity: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0.6rem;\n  right: 0.6rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.div(_templateObject());

exports.default = _default;

var ShareWindow = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.visible ? 'visible' : 'hidden';
}, function (props) {
  return props.visible ? 1 : 0;
});

exports.ShareWindow = ShareWindow;
//# sourceMappingURL=Share.js.map