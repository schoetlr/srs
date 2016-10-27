srs.controller("NewCardCtrl", ['$scope', '_', 'deck', 'deckService', function($scope, _, deck, deckService){

  $scope.cardForm = {};

  deckService.getDecks().then(function(response){
    $scope.decks = response;
  })

  $scope.selectedDeck = deck;

  $scope.createCard = function(){
    cardService.createCard($scope.cardForm);

    $scope.cardForm = {};
  }
  


  

}]);