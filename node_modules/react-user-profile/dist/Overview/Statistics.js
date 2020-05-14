"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Key = exports.Value = exports.Entry = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.63rem;\n  color: #343e00;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  color: #ffa640;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 2.4rem;\n  display: grid;\n  grid-template-columns: repeat(5fr);\n  grid-gap: 1.4rem 0;\n  text-align: left;\n\n  @media only screen and (max-width: 499px) {\n    ", " {\n      grid-column: 1/6;\n    }\n  }\n\n  @media only screen and (min-width: 500px) {\n    grid-template-columns: repeat(9, 1fr);\n\n    ", " {\n      grid-column: 7/10;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), _Button.default, _Button.default);

exports.Wrapper = Wrapper;

var Entry = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.left && 'margin-right: auto;';
}, function (props) {
  return props.center && 'margin: 0 auto;';
}, function (props) {
  return props.right && 'margin-left: auto;';
}, function (props) {
  return props.separator && 'width:1px; height: 100%; background: rgba(151, 151, 151, 0.1); margin: 0 auto;';
});

exports.Entry = Entry;

var Value = _styledComponents.default.div(_templateObject3());

exports.Value = Value;

var Key = _styledComponents.default.div(_templateObject4());

exports.Key = Key;
//# sourceMappingURL=Statistics.js.map