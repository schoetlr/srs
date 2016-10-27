srs.controller("DecksCtrl", ['$scope', 'deckService', function($scope, deckService){

  

  deckService.getDecks().then(function(response){
    $scope.decks = response;
  });



  $scope.deckForm = function(deck) {
    
    
    ModalService.showModal({
      templateUrl: "/templates/decks/form.html",
      controller: "DeckFormCtrl",
      inputs: {
        deck: deck
      }
    }).then(function(modal) {
    
      modal.element.modal();
      modal.close.then(function(result) {
        console.log("modal closed");
      });
    });

  };

}]);