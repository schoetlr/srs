srs.controller("DecksCtrl", ['$scope', 'deckService', function($scope, deckService){

  $scope.deckForm = {};

  $scope.createDeck = function(){

    deckService.createDeck($scope.deckForm);


    $scope.closeModal('result?');
  };

  $scope.closeModal = function(result){
    close(result, 1);
    $(".modal-backdrop").remove();
  };

  

}]);