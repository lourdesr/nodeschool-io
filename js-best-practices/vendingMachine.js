
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');



module.exports = {



  insertCoin: function (coinType) {
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },
  releaseChange: function () {
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  convertToChange: function (currentBalance) {
    var changeArr = [];
    r = parseInt(parseInt(currentBalance) / parseInt(25));
    dr = currentBalance % 25;
    if (r != 0) {

      for (let i = 0; i < r; i++) {
        changeArr.push("q");
      }
    }
    if (dr >= 5) {
      ndr = parseInt(parseInt(dr) / parseInt(10));
      ndrx = dr % 10;
      for (let i = 0; i < ndr; i++) {
        changeArr.push("d");
      }
      if (ndrx >= 5) {
        nndr = parseInt(parseInt(ndrx) / parseInt(5));
        for (let i = 0; i < nndr; i++) {
          changeArr.push("n");
        }
        nndrx = ndrx % 5;
        for (let i = 0; i < nndrx; i++) {
          changeArr.push("p");
        }
      }
      else {
        for (let i = 0; i < ndrx; i++) {
          changeArr.push("p");
        }
      }
    }
    else {
      for (let i = 0; i < dr; i++) {
        changeArr.push("p");
      }
    }
    return changeArr;
  },

  isValidAmount: function (amount) {
    if (amount === null) {
      return false;
    } else {
      return true;
    }
  },

  vendProduct: function (productId) {
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
