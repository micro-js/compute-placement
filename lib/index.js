/**
 * Expose computePlacement
 */

module.exports = computePlacement

/**
 * computePlacement
 */

function computePlacement (placement, nodeDims, nearRect, space) {
  space = space || 0

  var width = nodeDims.width
  var height = nodeDims.height
  var vmid = nearRect.top + (nearRect.height / 2 - height / 2)
  var hmid = nearRect.left + (nearRect.width / 2 - width / 2)

  switch (placement) {
    case 'left':
      return {
        left: nearRect.left - (width + space),
        top: vmid
      }
    case 'right':
      return {
        left: nearRect.left + width + space,
        top: vmid
      }
    case 'top':
      return {
        left: hmid,
        top: nearRect.top - (height + space)
      }
    case 'bottom':
      return {
        left: hmid,
        top: nearRect.top + nearRect.height + space
      }
  }
}
