/**
 * Expose computePlacement
 */

module.exports = computePlacement

/**
 * computePlacement
 */

function computePlacement (placement, nodeDims, nearRect, opts) {
  opts = opts || {}

  var relative = opts.relative
  var space = opts.space || 0

  var width = nodeDims.width
  var height = nodeDims.height

  var top = relative ? 0 : nearRect.top
  var left = relative ? 0 : nearRect.left
  var vmid = top + (nearRect.height / 2 - height / 2)
  var hmid = left + (nearRect.width / 2 - width / 2)

  switch (placement) {
    case 'left':
      return {
        left: left - (width + space),
        top: vmid
      }
    case 'right':
      return {
        left: left + nearRect.width + space,
        top: vmid
      }
    case 'top':
      return {
        left: hmid,
        top: top - (height + space)
      }
    case 'bottom':
      return {
        left: hmid,
        top: top + nearRect.height + space
      }
  }
}
