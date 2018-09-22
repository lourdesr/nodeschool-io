module.exports = {

  getAmount: function (coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    if (coinType === 'p') {
      return 1;
    }
    else if (coinType === 'n') {
      return 5;
    }
    else if (coinType === 'd') {
      return 10;
    }
    else if (coinType === 'q') {
      return 25
    }
    else {
      throw new Error('Unrecognized coin ' + coinType);
    }
  },

};