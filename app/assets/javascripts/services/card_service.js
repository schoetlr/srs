srs.factory("cardService", ['Restangular', function(Restangular){

  var service = {};

  service.createCard = function(cardParams){
    var card = { card: cardParams };

    return Restangular.all("cards").post(card);

  };

  service.scheduleCard = function(card, difficulty){
    card = Restangular.restangularizeElement(null, card, '/cards')
    return card.patch({ difficulty: difficulty, study: true });
  };

  return service;
}]);