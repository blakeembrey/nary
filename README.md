# N-ary

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Force a function to accept a maximum number of arity.

## Installation

```
npm install nary --save
```

## Usage

```javascript
var nary = require('nary');

nary.nullary(fn).length; //=> 0
nary.unary(fn).length; //=> 1
nary.binary(fn).length; //=> 2
nary.ternary(fn).length; //=> 3
nary.quaternary(fn).length; //=> 4
nary.ary(5, fn).length; //=> 5

// This example fails because `parseInt` accepts an optional second argument as
// the radix. This can wreak havoc in unexpected situations.
[1, 2, 3, 4, 5].map(parseInt); //=> [1, NaN, NaN, NaN, NaN]

// Using the `unary` method, it will force the function to accept only one
// argument.
[1, 2, 3, 4, 5].map(nary.unary(parseInt)); //=> [1, 2, 3, 4, 5]
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/nary.svg?style=flat
[npm-url]: https://npmjs.org/package/nary
[travis-image]: https://img.shields.io/travis/blakeembrey/nary.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/nary
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/nary.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/nary?branch=master
[gittip-image]: https://img.shields.io/gittip/blakeembrey.svg?style=flat
[gittip-url]: https://www.gittip.com/blakeembrey
