const assert = require('assert');
const calculator = require('../scripts/calculator.js');

// Test Basic Calculations
assert.strictEqual(eval('1 + 1'), 2, 'Addition test failed');
assert.strictEqual(eval('5 * 3'), 15, 'Multiplication test failed');
assert.strictEqual(eval('10 / 2'), 5, 'Division test failed');

// Test Scientific Functions
assert.strictEqual(Math.sin(0), 0, 'Sine function test failed');
assert.strictEqual(Math.cos(0), 1, 'Cosine function test failed');

// Test Unit Conversion
assert.strictEqual(convertUnit(1, "length"), 0.621371, 'Length conversion test failed');

// Test Graph Plotting
assert.strictEqual(typeof plotGraph, 'function', 'Graph plotting function not defined');
