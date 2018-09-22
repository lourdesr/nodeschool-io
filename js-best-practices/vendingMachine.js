
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');


var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {

  getProducts: function () {
    return products;
  },

  insertCoin: function (coinType) {
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },
  releaseChange: function () {
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },

  isValidAmount: function (amount) {
    if (amount === null) {
      return false;
    } else {
      return true;
    }
  },

  getProduct: function (productId) {
    var product = products.find(function (p) { return p.id === productId; });
    return product;
  },

  vendProduct: function (productId) {
    var product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  }

};
