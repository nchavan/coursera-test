(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var toBuyContr = this;

  toBuyContr.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyContr.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var broughtContr = this;

  broughtContr.items = ShoppingListCheckOffService.getBroughtItems();
  
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

  service.removeToBuyItem = function (itemIndex) {
    broughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function(){
    return toBuyItems;
  };

    service.getBroughtItems = function(){
      return broughtItems;
    };
}

})();
