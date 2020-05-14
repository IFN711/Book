"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = exports.Title = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Photo = _interopRequireDefault(require("../Photo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.75rem;\n  color: #8298b9;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.13rem;\n  color: #002c71;\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media only screen and (max-width: 499px) {\n    ", " {\n      margin-top: -40%;\n      transform: translateY(-15%);\n    }\n  }\n\n  @media only screen and (min-width: 500px) {\n    display: flex;\n    align-items: center;\n    text-align: left;\n\n    ", " {\n      margin-right: 1.5rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject(), _Photo.default, _Photo.default);

exports.Wrapper = Wrapper;

var Title = _styledComponents.default.div(_templateObject2());

exports.Title = Title;

var Subtitle = _styledComponents.default.div(_templateObject3());

exports.Subtitle = Subtitle;
//# sourceMappingURL=Information.js.map