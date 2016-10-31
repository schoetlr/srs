srs.controller("AllCardsCtrl", ['$scope', 'cards', function($scope, cards){

  $scope.cards = cards;

  $scope.card = $scope.cards.shift();

  $scope.cardSide = 'front';

  $scope.flipCard = function(){
    if($scope.cardSide === 'front'){
      $scope.cardSide = 'back';
    } else {
      $scope.cardSide = 'front';
    }
  };

  $scope.nextCard = function(){
    $scope.card = $scope.cards.shift();
  };

}]);