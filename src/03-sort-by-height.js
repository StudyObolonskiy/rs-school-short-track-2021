/* eslint-disable consistent-return */
/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = [];
  arr.forEach((e) => {
    if (e !== -1) {
      sorted.push(e);
    }
  });
  function compareNumeric(a, b) {
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
  }
  sorted.sort(compareNumeric);
  arr.forEach((e, ind) => {
    if (e !== -1) {
      arr.splice(ind, 1, sorted[0]);
      sorted.shift();
    }
  });
  return arr;
}

module.exports = sortByHeight;
