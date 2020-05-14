"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Photo = _interopRequireDefault(require("../Photo"));

var _Button = _interopRequireDefault(require("../Button"));

var _LikeButton = _interopRequireDefault(require("../LikeButton"));

var _ShareButton = _interopRequireDefault(require("../ShareButton"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _Share = _interopRequireWildcard(require("./Share"));

var Information = _interopRequireWildcard(require("./Information"));

var Statistics = _interopRequireWildcard(require("./Statistics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Overview =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Overview, _PureComponent);

  function Overview() {
    var _this;

    _classCallCheck(this, Overview);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Overview).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onShareToggle", function () {
      _this.setState(function (prevState) {
        return {
          shareVisible: !prevState.shareVisible
        };
      });
    });

    _this.state = {
      shareVisible: false
    };
    return _this;
  }

  _createClass(Overview, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          photo = _this$props.photo,
          name = _this$props.name,
          location = _this$props.location,
          statistics = _this$props.statistics,
          onLike = _this$props.onLike,
          onFollow = _this$props.onFollow;
      var shareVisible = this.state.shareVisible;
      return _react.default.createElement(_Wrapper.default, null, _react.default.createElement(_Share.default, null, _react.default.createElement(_ShareButton.default, {
        onClick: this.onShareToggle
      }), _react.default.createElement(_Share.ShareWindow, {
        visible: shareVisible
      }, window.location.href)), _react.default.createElement(Information.Wrapper, null, _react.default.createElement(_Photo.default, {
        src: photo,
        alt: name,
        size: "big"
      }), _react.default.createElement("div", null, _react.default.createElement(Information.Title, null, name, ' ', _react.default.createElement(_LikeButton.default, {
        onClick: onLike
      })), _react.default.createElement(Information.Subtitle, null, location))), _react.default.createElement(Statistics.Wrapper, null, _react.default.createElement(Statistics.Entry, {
        left: true
      }, _react.default.createElement(Statistics.Value, null, statistics.likesCount), _react.default.createElement(Statistics.Key, null, "Likes")), _react.default.createElement(Statistics.Entry, {
        separator: true
      }), _react.default.createElement(Statistics.Entry, {
        center: true
      }, _react.default.createElement(Statistics.Value, null, statistics.followingCount), _react.default.createElement(Statistics.Key, null, "Following")), _react.default.createElement(Statistics.Entry, {
        separator: true
      }), _react.default.createElement(Statistics.Entry, {
        right: true
      }, _react.default.createElement(Statistics.Value, null, statistics.followersCount), _react.default.createElement(Statistics.Key, null, "Followers")), _react.default.createElement(_Button.default, {
        onClick: onFollow
      }, "FOLLOW")));
    }
  }]);

  return Overview;
}(_react.PureComponent);

_defineProperty(Overview, "propTypes", {
  photo: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  location: _propTypes.default.string.isRequired,
  statistics: _propTypes.default.shape({
    likesCount: _propTypes.default.number,
    followingCount: _propTypes.default.number,
    followersCount: _propTypes.default.number
  }).isRequired,
  onLike: _propTypes.default.func.isRequired,
  onFollow: _propTypes.default.func.isRequired
});

var _default = Overview;
exports.default = _default;
//# sourceMappingURL=index.js.map