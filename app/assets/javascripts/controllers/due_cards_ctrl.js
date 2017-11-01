srs.controller("DueCardsCtrl", ['$scope', 'dateService', 'cards', '_', 'cardService', function($scope, dateService, cards, _, cardService){


  dateService.getCurrentDate().then(function(response){
    tele = response;
    $scope.currentDate = response[0];
    console.log('date response works');

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
    
    cardService.scheduleCard($scope.card, difficulty).then(function(response){
      foofoo = response;

      if($scope.currentDate == response.next_due){
        $scope.cards.push(response);
      }
    }, function(){
      console.log("there was a problem updating card")
    });


    if($scope.cards.length > 0){
      $scope.flipCard();
      $scope.card = $scope.cards.shift();
    } else {
      $scope.cardSide = "outOfCards";
    }
    
  };


  $scope.redoCard = function(){
    $scope.card.repetition = 0;

    $scope.cards.push($scope.card);

    $scope.flipCard();
    $scope.card = $scope.cards.shift();
  };


  

}]);