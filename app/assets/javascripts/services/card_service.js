srs.factory("cardService", ['Restangular', function(Restangular){

  var service = {};

  service.createCard = function(cardParams){
    var card = { card: cardParams };

    return Restangular.all("cards").post(card);

  };

  return service;
}]);