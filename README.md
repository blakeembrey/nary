# Nary

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Enforce function arity in JavaScript.

## Installation

```
npm install nary --save
```

## Usage

```ts
import { nary, nullary, unary, binary, ternary, quaternary } from 'nary'

nullary(fn).length; //=> 0
unary(fn).length; //=> 1
binary(fn).length; //=> 2
ternary(fn).length; //=> 3
quaternary(fn).length; //=> 4
nary(5, fn).length; //=> 5

// This example fails because `parseInt` accepts an optional second argument as
// the radix. This can wreak havoc in unexpected situations.
[1, 2, 3, 4, 5].map(parseInt); //=> [1, NaN, NaN, NaN, NaN]

// Using `unary`, the function will only accept a single argument.
[1, 2, 3, 4, 5].map(unary(parseInt)); //=> [1, 2, 3, 4, 5]
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/nary.svg?style=flat
[npm-url]: https://npmjs.org/package/nary
[downloads-image]: https://img.shields.io/npm/dm/nary.svg?style=flat
[downloads-url]: https://npmjs.org/package/nary
[travis-image]: https://img.shields.io/travis/blakeembrey/nary.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/nary
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/nary.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/nary?branch=master
