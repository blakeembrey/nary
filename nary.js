var arity   = require('arity');
var partial = require('partial');

/**
 * Force a function to accept a specific maximum number of arguments.
 *
 * @param  {Number}   length
 * @param  {Function} fn
 * @return {Function}
 */
exports.ary = function (length, fn) {
  return arity(length, function () {
    return fn.apply(this, Array.prototype.slice.call(arguments, 0, length));
  });
};

/**
 * Force a function to accept zero arguments.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.nullary = partial(exports.ary, 0);

/**
 * Force a function to accept a maximum of one argument.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.unary = partial(exports.ary, 1);

/**
 * Force a function to accept a maximum of two arguments.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.binary = partial(exports.ary, 2);

/**
 * Force a function to accept three arguments.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.ternary = partial(exports.ary, 3);

/**
 * Force a function to accept four arguments.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.quaternary = partial(exports.ary, 4);
