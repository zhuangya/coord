'use strict';

var coord = require('.')
var assert = require('assert')

assert.equal(coord.fromArray([1, 45, 54]), 1.765);
assert.equal(coord.fromArray([100, 42, 42]), 100.71166666666667);

console.log('test all passed')
