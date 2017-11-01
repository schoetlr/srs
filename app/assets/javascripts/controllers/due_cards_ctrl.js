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
    console.log("there was an error getting current date");
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
    
    cardService.updateCard(card, difficulty).then(function(response){
      response = response[0];

      if($scope.currentDate == response.next_due){
        $scope.cards.push(response);
      }
    }, function(){
      console.log("there was a problem updating card")
    });


    if($scope.cards.length > 0){
      $scope.card = $scope.cards.shift();
    } else {
      $scope.cardSide = "outOfCards";
    }
    
  };


  $scope.redoCard = function(){
    //next_due stays the same so you see the card again

    $scope.cards.push($scope.card);
    $scope.nextCard();
  };


  

}]);