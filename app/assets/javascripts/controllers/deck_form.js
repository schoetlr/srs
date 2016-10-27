srs.controller("DeckFormCtrl", ['$scope', 'deckService', 'close', 'deck', '$rootScope', function($scope, deckService, close, deck, $rootScope){

  $scope.deck = deck;
  $scope.deckForm = {};

  if($scope.deck.id){
    $scope.updating = true;
  } else {
    $scope.creating = true;
  }

  $scope.submitForm = function(){

    if(!$scope.deck){
      deckService.createDeck($scope.deckForm);
    } else {
      deckService.updateDeck($scope.deck);
    }
    
    $rootScope.$broadcast("decks.changed");

    $scope.closeModal('result?');
  };

  

  $scope.closeModal = function(result){
    close(result, 1);
    $(".modal-backdrop").remove();
  };

  

}]);