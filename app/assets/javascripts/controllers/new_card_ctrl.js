srs.controller("NewCardCtrl", ['$scope', '_', 'deck', 'deckService', '$rootScope', 'cardService', function($scope, _, deck, deckService, $rootScope, cardService){

  $scope.cardForm = {};

  deckService.getDecks().then(function(response){
    $scope.deckData = {
                    decks: response,
                    selectedDeck: deck
                        };
  })

  

  $scope.createCard = function(){
    $scope.cardForm.deck_id = $scope.deckData.selectedDeck.id;

    cardService.createCard($scope.cardForm).then(function(response){
      $rootScope.$broadcast("card.created");
    });

    $scope.cardForm = {};
  }
  


  

}]);