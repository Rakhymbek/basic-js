const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringified = n.toString().split("");
  const numArr = [];

  stringified.map((num, i) => {
    let copyStr = [...stringified];
    copyStr.splice(i, 1);
    
    numArr.push(+(copyStr.join("")));
  })

  return Math.max(...numArr);
}


module.exports = {
  deleteDigit,
};
