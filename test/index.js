/**
 * Imports
 */

var computePlacement = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var dims = {width: 100, height: 100}
  var nearRect = {width: 50, height: 50, left: 40, top: 30}

  t.deepEqual(computePlacement('left', dims, nearRect), {left: -60, top: 5})
  t.deepEqual(computePlacement('right', dims, nearRect), {left: 140, top: 5})
  t.deepEqual(computePlacement('top', dims, nearRect), {left: 15, top: -70})
  t.deepEqual(computePlacement('bottom', dims, nearRect), {left: 15, top: 80})

  t.end()
})
