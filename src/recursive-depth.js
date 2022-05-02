const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let arrLength = 1;

    for (let value of arr) {
      if (typeof value === "object") {
        let count = 1;
        count += this.calculateDepth(value);
        if (count > arrLength) {
          arrLength = count;
        }
      }
    }
    return arrLength;
  }
}

module.exports = {
  DepthCalculator,
};
