srs.controller("AllCardsCtrl", ['$scope', 'cards', function($scope, cards){

  $scope.cards = cards;

  $scope.card = $scope.cards.shift();


  $scope.nextCard = function(){
    $scope.card = $scope.cards.shift();
  };
  
}]);