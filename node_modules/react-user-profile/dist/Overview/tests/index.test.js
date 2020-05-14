"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _ShareButton = _interopRequireDefault(require("../../ShareButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Overview />', function () {
  it('should show and hide share window on click', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
      photo: "",
      name: "",
      location: "",
      statistics: {
        likesCount: 0,
        followingCount: 0,
        followersCount: 0
      },
      onLike: function onLike() {},
      onFollow: function onFollow() {}
    }));
    wrapper.find(_ShareButton.default).simulate('click');
    expect(wrapper.state('shareVisible')).toBe(true);
    wrapper.find(_ShareButton.default).simulate('click');
    expect(wrapper.state('shareVisible')).toBe(false);
  });
});
//# sourceMappingURL=index.test.js.map