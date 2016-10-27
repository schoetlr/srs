srs.controller("DecksCtrl", ['$scope', 'deckService', function($scope, deckService){

  

  deckService.getDecks().then(function(response){
    $scope.decks = response;
  });



  $scope.newDeck = function() {
    
    
    ModalService.showModal({
      templateUrl: "/templates/decks/new.html",
      controller: "NewDeckCtrl",
      inputs: {
        
      }
    }).then(function(modal) {
    
      modal.element.modal();
      modal.close.then(function(result) {
        console.log("modal closed");
      });
    });

  };

}]);