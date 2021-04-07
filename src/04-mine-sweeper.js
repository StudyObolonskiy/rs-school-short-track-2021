/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const area = [];
  matrix.forEach((e) => {
    const line = [];
    e.forEach((item) => {
      if (item === false) {
        line.push(0);
      } else {
        line.push(true);
      }
    });
    area.push(line);
  });
  matrix.forEach((e, index) => {
    e.forEach((item, ind) => {
      if (item === true) {
        if (ind === 0 && index === 0) {
          if (area[index][ind + 1] !== true) area[index][ind + 1] += 1;
          if (area[index + 1][ind + 1] !== true) area[index + 1][ind + 1] += 1;
          if (area[index + 1][ind] !== true) area[index + 1][ind] += 1;
        }
        if (ind === 0 && index < matrix.length - 1 && index > 0) {
          if (area[index][ind + 1] !== true) area[index][ind + 1] += 1;
          if (area[index - 1][ind + 1] !== true) area[index - 1][ind + 1] += 1;
          if (area[index - 1][ind] !== true) area[index - 1][ind] += 1;
          if (area[index + 1][ind] !== true) area[index + 1][ind] += 1;
          if (area[index + 1][ind + 1] !== true) area[index + 1][ind + 1] += 1;
        }
        if (ind === 0 && index === matrix.length - 1) {
          if (area[index][ind + 1]) area[index][ind + 1] += 1;
          if (area[index - 1][ind]) area[index][ind + 1] += 1;
          if (area[index - 1][ind + 1]) area[index][ind + 1] += 1;
        }
        if (ind === e.length - 1 && index === 0) {
          if (area[index][ind - 1] !== true) area[index][ind - 1] += 1;
          if (area[index + 1][ind - 1] !== true) area[index + 1][ind - 1] += 1;
          if (area[index + 1][ind] !== true) area[index + 1][ind] += 1;
        }
        if (ind === e.length - 1 && index < matrix.length - 1 && index > 0) {
          if (area[index][ind - 1] !== true) area[index][ind - 1] += 1;
          if (area[index - 1][ind - 1] !== true) area[index - 1][ind - 1] += 1;
          if (area[index - 1][ind] !== true) area[index - 1][ind] += 1;
          if (area[index + 1][ind] !== true) area[index + 1][ind] += 1;
          if (area[index + 1][ind - 1] !== true) area[index + 1][ind - 1] += 1;
        }
        if (ind === e.length - 1 && index === matrix.length - 1) {
          if (area[index][ind - 1]) area[index][ind - 1] += 1;
          if (area[index - 1][ind]) area[index][ind + 1] += 1;
          if (area[index - 1][ind - 1]) area[index][ind - 1] += 1;
        }
        if (ind > 0 && ind < e.length - 1 && index > 0 && index < matrix.length - 1) {
          if (area[index][ind - 1] !== true) area[index][ind - 1] += 1;
          if (area[index][ind + 1] !== true) area[index][ind + 1] += 1;
          if (area[index + 1][ind] !== true) area[index + 1][ind] += 1;
          if (area[index - 1][ind] !== true) area[index - 1][ind] += 1;
          if (area[index + 1][ind + 1] !== true) area[index + 1][ind + 1] += 1;
          if (area[index + 1][ind - 1] !== true) area[index + 1][ind - 1] += 1;
          if (area[index - 1][ind - 1] !== true) area[index - 1][ind - 1] += 1;
          if (area[index - 1][ind + 1] !== true) area[index - 1][ind + 1] += 1;
        }
      }
    });
  });
  matrix.forEach((e, index) => {
    e.forEach((item, ind) => {
      if (item === true) {
        area[index][ind] = 1;
      }
    });
  });
  return area;
}

module.exports = minesweeper;
