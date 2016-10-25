var assert = require('assert');

var core = require('../core.js');

describe('Core', function() {
  describe('#square()', function() {
    it('should return square of given number', function() {
        assert.equal(25, core.square(5));
    });
  });
});