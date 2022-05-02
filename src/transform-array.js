const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";

  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] === discardPrev && i === 0) {
      newArr.splice(i, 1);
      return newArr;
    }

    if (newArr[i] === doublePrev && i === 0) {
      newArr.splice(i, 1);
      return newArr;
    }
    if (
      (newArr[i] === doubleNext && i === newArr.length - 1) ||
      (newArr[i] === discardNext && i === newArr.length - 1)
    ) {
      newArr.splice(i, 1);
      return newArr;
    }
    if (
      (newArr[i] === discardNext && newArr[i + 2] === doublePrev) ||
      (newArr[i] === discardNext && newArr[i + 2] === discardPrev)
    ) {
      newArr.splice(i, 3);
      return newArr;
    }
    if (newArr[i] === doubleNext) {
      newArr.splice(i, 1, newArr[i + 1]);
      i++;
    } else if (newArr[i] === discardPrev) {
      newArr.splice(i - 1, 2);
    } else if (newArr[i] === discardNext) {
      newArr.splice(i, 2);
    } else if (newArr[i] === doublePrev) {
      newArr.splice(i, 1, newArr[i - 1]);
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
