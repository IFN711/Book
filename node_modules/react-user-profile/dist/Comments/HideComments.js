"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  cursor: pointer;\n  text-decoration: underline;\n  font-size: 0.88rem;\n  color: #ffa640;\n  background: none;\n  border: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-bottom: 1rem;\n\n  @media only screen and (min-width: 500px) {\n    text-align: left;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.div(_templateObject());

exports.default = _default;

var Button = _styledComponents.default.button(_templateObject2());

exports.Button = Button;
//# sourceMappingURL=HideComments.js.map