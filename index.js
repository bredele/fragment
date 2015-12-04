
/**
 * Fragment array of nodes.
 *
 * @param {Array} arr
 * @return {DocumentFragment}
 * @api public
 */

module.exports = function(arr) {
  var el = document.createDocumentFragment();
  for(var i = 0, l = arr.length; i < l; i++) {
    el.appendChild(arr[i]));
  }
  return el;
}