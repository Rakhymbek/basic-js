const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }

  if (
    date instanceof Date === false ||
    (date.toString !== Date.prototype.toString && arguments.length > 0)
  ) {
    throw new Error("Invalid date!");
  }

  const month = date.toLocaleDateString().slice(3, 5);

  if (month === "03" || month === "04" || month === "05") {
    return "spring";
  } else if (month === "12" || month === "01" || month === "02") {
    return "winter";
  } else if (month === "09" || month === "10" || month === "11") {
    return "autumn";
  } else if (month === "06" || month === "07" || month === "08") {
    return "summer";
  }
}

module.exports = {
  getSeason,
};
