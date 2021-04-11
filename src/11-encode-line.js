/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  let res = '';
  arr.forEach((e, i) => {
    if (e === arr[i - 1]) {
      count += 1;
    }
    if (e !== arr[i - 1] && i !== 0) {
      if (count > 1) {
        res += count + arr[i - 1];
      } else {
        res += arr[i - 1];
      }
      count = 1;
    }
    if (i === arr.length - 1) {
      if (count > 1) {
        res += count + e;
      } else {
        res += e;
      }
    }
  });
  return res;
}

module.exports = encodeLine;
