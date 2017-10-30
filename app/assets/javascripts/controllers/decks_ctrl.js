srs.controller("DecksCtrl", ['$scope', 'deckService', 'ModalService', '$rootScope', function($scope, deckService, ModalService, $rootScope){

  console.log("loaded");

  deckService.getDecks().then(function(response){
    $scope.decks = response;
  });

  $scope.$on("decks.changed", function(){
    deckService.getDecks().then(function(response){
      $scope.decks = response;
    });
  })



  $scope.deckForm = function(deck){
    if(!deck){
      var deck = {};
    }
    
    ModalService.showModal({
      templateUrl: "/templates/decks/form.html",
      controller: "DeckFormCtrl",
      inputs: {
        deck: deck
      }
    }).then(function(modal){
    
      modal.element.modal();
      modal.close.then(function(result){
        console.log("modal closed");
      });
    });

  };


  $scope.destroyDeck = function(deck){
    deckService.destroyDeck(deck);

    $rootScope.$broadcast("decks.changed");
  };

}]);