srs.controller("DecksCtrl", ['$scope', 'deckService', function($scope, deckService){

  $scope.deckForm = {};

  deckService.getDecks().then(function(response){
    $scope.decks = response;
  });

}]);