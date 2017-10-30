srs.controller("DueCardsCtrl", ['$scope', 'timeService', 'cards', '_', 'cardService', function($scope, timeService, cards, _, cardService){


  timeService.getCurrentTime().then(function(response){
    $scope.currentDate = response;

    $scope.cards = _.filter(cards, function(card){
      current = $scope.currentDate;
      card_date = card;
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

  $scope.nextCard = function(difficulty){
    //set last_studied to and patch
    $scope.card.last_studied = $scope.currentDate;
    //next_due calculated on backend using difficulty
    $scope.card.next_due = difficulty;
    cardService.updateCard(card);


    if($scope.cards.length > 0){
      $scope.card = $scope.cards.shift();
    } else {
      console.log("else");
      $scope.cardSide = "outOfCards";
    }
    
  };


  $scope.redoCard = function(){
    //next_due stays the same so you see the card again

    $scope.cards.push($scope.card);
    $scope.nextCard();
  };


  

}]);