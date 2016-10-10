(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var toBuyContr = this;

  toBuyContr.itemName = "";
  toBuyContr.itemQuantity = "";

  toBuyContr.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyContr.addItem = function (){
    ShoppingListCheckOffService.addToBuyItem(toBuyContr.itemName, toBuyContr.itemQuantity);
  };
  
  toBuyContr.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var broughtContr = this;

  broughtContr.itemName = "";
  broughtContr.itemQuantity = "";

  broughtContr.items = ShoppingListCheckOffService.getBroughtItems();

  broughtContr.addItem = function (){
    ShoppingListCheckOffService.addBroughtItem(broughtContr.itemName, broughtContr.itemQuantity);
  };
  
  broughtContr.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeBroughtItem(itemIndex);
  };
  
}

function ShoppingListCheckOffService(){

  var service = this;

  //List of
  var toBuyItems = [
    {
        name: "Cookies",
        quantity: 10
    },
    {
        name: "Cake",
        quantity: 1
    },
    {
        name: "Donuts",
        quantity: 5
    },
    {
        name: "Brownies",
        quantity: 12
    },
    {
        name: "Fruits",
        quantity: 1
    }
  ];

  var broughtItems = [];

  service.addToBuyItem = function (itemName, quantity) {
      var item = {
        name : itemName,
        quantity: quantity
      };
      toBuyItems.push(item);
  };

  service.addBroughtItem = function (itemName, quantity) {
        var item = {
          name : itemName,
          quantity: quantity
        };
        broughtItems.push(item);
  };

  service.removeToBuyItem = function (itemIndex) {
    broughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.removeBroughtItem = function (itemIndex) {
      toBuyItems.push(broughtItems[itemIndex]);
      broughtItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function(){
    return toBuyItems;
  };

    service.getBroughtItems = function(){
      return broughtItems;
    };
}

})();
