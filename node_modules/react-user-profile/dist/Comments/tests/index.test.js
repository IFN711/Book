"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _HideComments = require("../HideComments");

var _Comment = _interopRequireDefault(require("../../Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Comments />', function () {
  it('should hide and show comments on click', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_index.default, {
      comments: []
    }));
    expect(wrapper.state('visible')).toBe(true);
    wrapper.find(_HideComments.Button).simulate('click');
    expect(wrapper.state('visible')).toBe(false);
    wrapper.find(_HideComments.Button).simulate('click');
    expect(wrapper.state('visible')).toBe(true);
  });
  it('should not render any comment without comments', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_index.default, {
      comments: []
    }));
    expect(wrapper.find(_Comment.default)).toHaveLength(0);
  });
  it('should render all specified comments', function () {
    var comments = ['a', 'b', 'c', 'd'].map(function (id) {
      return {
        id: id,
        photo: '',
        userName: '',
        content: '',
        createdAt: 0
      };
    });
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_index.default, {
      comments: comments
    }));
    expect(wrapper.find(_Comment.default)).toHaveLength(comments.length);
  });
});
//# sourceMappingURL=index.test.js.map