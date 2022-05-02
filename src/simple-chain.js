const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  store: [],
  getLength() {
    return this.store.length;
  },
  addLink(value = " ") {
    this.store.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (this.store[position] === undefined || position < 1) {
      this.store.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.store.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.store.reverse();
    return this;
  },
  finishChain() {
    let linker = this.store.join("~~");
    this.store.length = 0;
    return linker;
  },
};

module.exports = {
  chainMaker,
};
