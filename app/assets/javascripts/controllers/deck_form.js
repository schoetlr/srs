srs.controller("DeckFormCtrl", ['$scope', 'deckService', function($scope, deckService){

  $scope.deckForm = {};

  if($scope.deck){
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
    


    $scope.closeModal('result?');
  };

  $scope.updateDeck = function(){
    deckService.updateDeck($scope.deckForm);


    $scope.closeModal('result?');
  };

  $scope.closeModal = function(result){
    close(result, 1);
    $(".modal-backdrop").remove();
  };

  

}]);