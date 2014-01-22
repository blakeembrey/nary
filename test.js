/* global describe, it */

var nary   = require('./');
var assert = require('assert');

/**
 * A simple function that returns the number of arguments I pass to it.
 *
 * @return {Number}
 */
var test = function () {
  return arguments.length;
};

describe('nary', function () {
  it('should accept zero arguments', function () {
    var fn = nary.nullary(test);

    assert.equal(fn.length, 0);
    assert.equal(fn('one'), 0);
    assert.equal(fn('one', 'two'), 0);
    assert.equal(fn('one', 'two', 'three'), 0);
  });

  it('should accept a single argument', function () {
    var fn = nary.unary(test);

    assert.equal(fn.length, 1);
    assert.equal(fn('one'), 1);
    assert.equal(fn('one', 'two'), 1);
    assert.equal(fn('one', 'two', 'three'), 1);
  });

  it('should accept two arguments', function () {
    var fn = nary.binary(test);

    assert.equal(fn.length, 2);
    assert.equal(fn('one'), 2);
    assert.equal(fn('one', 'two'), 2);
    assert.equal(fn('one', 'two', 'three'), 2);
  });

  it('should accept three arguments', function () {
    var fn = nary.ternary(test);

    assert.equal(fn.length, 3);
    assert.equal(fn('one'), 3);
    assert.equal(fn('one', 'two'), 3);
    assert.equal(fn('one', 'two', 'three'), 3);
  });

  it('should accept any number of arguments', function () {
    var fn = nary.ary(10, test);

    assert.equal(fn.length, 10);
    assert.equal(fn('one'), 10);
    assert.equal(fn('one', 'two'), 10);
    assert.equal(fn('one', 'two', 'three'), 10);
    assert.equal(fn('one', 'two', 'three', 'four'), 10);
  });
});
