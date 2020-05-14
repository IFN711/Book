"use strict";

var _index = require("../index");

describe('<Comment />', function () {
  var now = Date.now();
  var second = 1000;
  var minute = 60 * second;
  var hour = 60 * minute;
  var day = 24 * hour;
  test('displays time as minutes only up to 59 minutes', function () {
    var contains = 'm';
    expect((0, _index.getFormattedTimestamp)(now)).toEqual(expect.stringContaining(contains));
    expect((0, _index.getFormattedTimestamp)(now - 59 * minute)).toEqual(expect.stringContaining(contains));
    expect((0, _index.getFormattedTimestamp)(now - 60 * minute)).not.toEqual(expect.stringContaining(contains));
  });
  test('displays time as hours only from 1 to 23 hours', function () {
    var contains = 'h';
    expect((0, _index.getFormattedTimestamp)(now - hour)).toEqual(expect.stringContaining(contains));
    expect((0, _index.getFormattedTimestamp)(now - 23 * hour)).toEqual(expect.stringContaining(contains));
    expect((0, _index.getFormattedTimestamp)(now - 24 * hour)).not.toEqual(expect.stringContaining(contains));
  });
  test('displays time as days from 24 hours', function () {
    var contains = 'd';
    expect((0, _index.getFormattedTimestamp)(now - day)).toEqual(expect.stringContaining(contains));
    expect((0, _index.getFormattedTimestamp)(now - 100 * day)).toEqual(expect.stringContaining(contains));
  });
});
//# sourceMappingURL=index.test.js.map