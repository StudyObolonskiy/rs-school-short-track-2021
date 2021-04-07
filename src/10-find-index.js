/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let leftInd = 0;
  let rightInd = array.length - 1;
  while (leftInd <= rightInd) {
    const currentInd = Math.round((leftInd + rightInd) / 2);
    if (array[currentInd] === value) {
      return currentInd;
    }
    if (array[currentInd] > value) {
      rightInd = currentInd - 1;
    }
    if (array[currentInd] < value) {
      leftInd = currentInd + 1;
    }
  }
  return -1;
}

module.exports = findIndex;
