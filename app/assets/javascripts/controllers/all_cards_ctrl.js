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
    if($scope.cards.length > 0){
      $scope.card = $scope.cards.shift();
    } else {
      console.log("else");
      $scope.cardSide = "outOfCards";
    }
    
  };

}]);