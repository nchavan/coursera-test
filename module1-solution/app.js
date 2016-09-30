(function () {
'use strict';

angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {

  $scope.lunchMenu = "";

  $scope.checkLunchGroup = function () {
    console.log($scope.lunchMenu);

    if(!$scope.lunchMenu.length){
        $scope.lunchMessage = "Please enter data first";
    } else if($scope.lunchMenu.split(",").length > 3){
        $scope.lunchMessage = "Too Much!";
    } else{
        $scope.lunchMessage = "Enjoy!";
    }
  };
}
})();
