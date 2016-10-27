srs.controller("DueCardsCtrl", ['$scope', 'timeService', 'cards', '_', function($scope, timeService, cards, _){


  timeService.getCurrentTime().then(function(response){
    $scope.currentDate = response;

    $scope.cards = _.filter(cards, function(card){
      return card.next_due <= $scope.currentDate;
    });

    $scope.card = $scope.cards.shift();

  }, function(){
    console.log("there was an error getting current_time");
  })


  $scope.nextCard = function(){
    $scope.card = $scope.cards.shift();
  };


  $scope.redoCard = function(){
    // set the next_due of the card
    
    $scope.cards.push($scope.card);
    $scope.nextCard();
  };


  

}]);