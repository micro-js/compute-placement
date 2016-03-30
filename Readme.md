
# compute-placement

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Compute the top/left offset of an element to position it near another element

## Installation

    $ npm install @f/compute-placement

## Usage

Use this to position an element near another. At the moment you can pass `top/left/bottom/right` as your placement options, though this may expand over time. This library does not actually set the position of anything on its own, nor does it accept any DOM nodes as its arguments. It is a pure function of the data you pass into it, so you can use its output to build higher-level things that actually execute the positioning for you.

```js
var computePlacement = require('@f/compute-placement')
var applyStyles = require('@f/apply-styles')
var elementRect = require('@f/element-rect')

function positionElement (node, placement, near, space) {
  var dims = getRect(node)
  var nearRect = getRect(near, true)
  var pos = computePlacement(placement, dims, nearRect, space)

  applyStyles(node, pos)
}
```

## API

### computePlacement(placement, nodeDims, nearRect, space)

- `placement` - One of `top/right/bottom/left`. Specifies where you want your node to go relative to the rect specified by `nearRect`.
- `nodeDims` - An object of the form `{width, height}` containing the width and height of the node you want to position.
- `nearRect` - The rect (as returned by `getBoundingClientRect` or something like [element-rect](https://github.com/micro-js/element-rect)). Note that if the node you are positioning is in the same container as your `near` element, you will want the `top/left` offsets to be relative to that container. [element-rect](https://github.com/micro-js/element-rect) will do that for you if you pass `true` as the second parameter. Otherwise everything will be absolute.
- `options` - Optional. Object containing:
    * `space` - Defaults to 0. The amount of padding in pixels you want to add to the position.
    * `relative` - Defaults to false. Whether or not the container is relative to its parent.

**Returns:** An object of the form `{top, left}` specified as numbers (not `<nn>px` strings), in pixels.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/compute-placement.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/compute-placement
[git-image]: https://img.shields.io/github/tag/micro-js/compute-placement.svg?style=flat-square
[git-url]: https://github.com/micro-js/compute-placement
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/compute-placement.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/compute-placement
