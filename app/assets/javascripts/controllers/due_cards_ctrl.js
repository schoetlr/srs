srs.controller("DueCardsCtrl", ['$scope', 'timeService', 'cards', '_', 'cardService', function($scope, timeService, cards, _, cardService){


  timeService.getCurrentTime().then(function(response){
    $scope.currentDate = response;

    $scope.cards = _.filter(cards, function(card){
      return card.next_due <= $scope.currentDate;
    });

    $scope.card = $scope.cards.shift();

  }, function(){
    console.log("there was an error getting current_time");
  })


  $scope.cardSide = 'front';

  $scope.flipCard = function(){
    if($scope.cardSide === 'front'){
      $scope.cardSide = 'back';
    } else {
      $scope.cardSide = 'front';
    }
  };

  $scope.nextCard = function(){
    //set the next_due for the card based on the response
    //set last_studied to and patch
    $scope.card.last_studied = $scope.currentDate;
    cardService.updateCard(card);


    if($scope.cards.length > 0){
      $scope.card = $scope.cards.shift();
    } else {
      console.log("else");
      $scope.cardSide = "outOfCards";
    }
    
  };


  $scope.redoCard = function(){
    // set the next_due of the card

    $scope.cards.push($scope.card);
    $scope.nextCard();
  };


  

}]);