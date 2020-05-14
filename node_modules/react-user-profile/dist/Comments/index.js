"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Comment = _interopRequireDefault(require("../Comment"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _HideComments = _interopRequireWildcard(require("./HideComments"));

var _List = _interopRequireDefault(require("./List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Comments =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Comments, _PureComponent);

  function Comments() {
    var _this;

    _classCallCheck(this, Comments);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Comments).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      _this.setState(function (prevProps) {
        return {
          visible: !prevProps.visible
        };
      });
    });

    _this.state = {
      visible: true
    };
    return _this;
  }

  _createClass(Comments, [{
    key: "render",
    value: function render() {
      var comments = this.props.comments;
      var visible = this.state.visible;
      return _react.default.createElement(_Wrapper.default, null, _react.default.createElement(_HideComments.default, null, _react.default.createElement(_HideComments.Button, {
        onClick: this.onToggle
      }, visible ? 'Hide' : 'Show', ' ', "comments (", comments.length, ")")), visible && _react.default.createElement(_List.default, null, comments.sort(function (a, b) {
        return b.createdAt - a.createdAt;
      }).map(function (comment) {
        return _react.default.createElement(_Comment.default, _extends({
          key: comment.id
        }, comment));
      })));
    }
  }]);

  return Comments;
}(_react.PureComponent);

var _default = Comments;
exports.default = _default;
//# sourceMappingURL=index.js.map