srs.controller("DeckCtrl", ['$scope', 'deckService', '$stateParams', '$rootScope', 'ModalService', function($scope, deckService, $stateParams, $rootScope, ModalService){

  deckService.getDeck($stateParams.id).then(function(response){
    $scope.deck = response;

    $scope.cards = $scope.deck.cards;
  });
  
  $scope.studyDueCards = function() {
    
    
    ModalService.showModal({
      templateUrl: "/templates/cards/study_due_cards.html",
      controller: "DueCardsCtrl",
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

  $scope.studyAllCards = function() {
    
    
    ModalService.showModal({
      templateUrl: "/templates/cards/study_all_cards.html",
      controller: "AllCardsCtrl",
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


  $scope.newCard = function(){
    var deck = $scope.deck;

    ModalService.showModal({
      templateUrl: "/templates/cards/new.html",
      controller: "NewCardCtrl",
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