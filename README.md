# Nary


[![NPM version](https://img.shields.io/npm/v/nary.svg?style=flat)](https://npmjs.org/package/nary)
[![NPM downloads](https://img.shields.io/npm/dm/nary.svg?style=flat)](https://npmjs.org/package/nary)
[![Build status](https://img.shields.io/travis/blakeembrey/nary.svg?style=flat)](https://travis-ci.org/blakeembrey/nary)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/nary.svg?style=flat)](https://coveralls.io/r/blakeembrey/nary?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/nary.svg)](https://greenkeeper.io/)

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
