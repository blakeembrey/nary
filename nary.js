var names   = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var __slice = Array.prototype.slice;

/**
 * Force a function to accept zero arguments.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.nullary = function (fn) {
  return function () {
    return fn.call(this);
  };
};

/**
 * Force a function to accept a single argument.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.unary = function (fn) {
  return function (a) {
    return fn.call(this, a);
  };
};

/**
 * Force a function to accept two arguments.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.binary = function (fn) {
  return function (a, b) {
    return fn.call(this, a, b);
  };
};

/**
 * Force a function to accept three arguments.
 *
 * @param  {Function} fn
 * @return {Function}
 */
exports.ternary = function (fn) {
  return function (a, b, c) {
    return fn.call(this, a, b, c);
  };
};

/**
 * Force a function to accept any number of arguments.
 *
 * @param  {Number}   length
 * @param  {Function} fn
 * @return {Function}
 */
exports.ary = function (length, fn) {
  return eval(
    '(function (' + __slice.call(names, 0, length).join(',') + ') {\n' +
    'var args = __slice.call(arguments, 0, length);\n' +
    'args.length = length;\n' +
    'return fn.apply(this, args);\n' +
    '})'
  );
};
