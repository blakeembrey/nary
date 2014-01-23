/* global describe, it */

var _      = 'test';
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
    assert.equal(fn(_), 0);
    assert.equal(fn(_, _), 0);
    assert.equal(fn(_, _, _), 0);
  });

  it('should accept a maximum of one argument', function () {
    var fn = nary.unary(test);

    assert.equal(fn.length, 1);
    assert.equal(fn(), 0);
    assert.equal(fn(_), 1);
    assert.equal(fn(_, _), 1);
    assert.equal(fn(_, _, _), 1);
  });

  it('should accept a maximum of two arguments', function () {
    var fn = nary.binary(test);

    assert.equal(fn.length, 2);
    assert.equal(fn(), 0);
    assert.equal(fn(_), 1);
    assert.equal(fn(_, _), 2);
    assert.equal(fn(_, _, _), 2);
  });

  it('should accept a maximum of three arguments', function () {
    var fn = nary.ternary(test);

    assert.equal(fn.length, 3);
    assert.equal(fn(), 0);
    assert.equal(fn(_), 1);
    assert.equal(fn(_, _), 2);
    assert.equal(fn(_, _, _), 3);
    assert.equal(fn(_, _, _, _), 3);
  });

  it('should accept a maximum of four arguments', function () {
    var fn = nary.quaternary(test);

    assert.equal(fn.length, 4);
    assert.equal(fn(), 0);
    assert.equal(fn(_), 1);
    assert.equal(fn(_, _), 2);
    assert.equal(fn(_, _, _), 3);
    assert.equal(fn(_, _, _, _), 4);
    assert.equal(fn(_, _, _, _, _), 4);
  });

  it('should accept any number of maximum arguments', function () {
    var fn = nary.ary(6, test);

    assert.equal(fn.length, 6);
    assert.equal(fn(), 0);
    assert.equal(fn(_), 1);
    assert.equal(fn(_, _), 2);
    assert.equal(fn(_, _, _), 3);
    assert.equal(fn(_, _, _, _), 4);
    assert.equal(fn(_, _, _, _, _, _, _, _, _), 6);
  });
});
