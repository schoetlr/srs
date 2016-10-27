srs.factory("deckService", ['Restangular', function(Restangular){

  var service = {};

  service.createDeck = function(deckData){
    var deck = { deck: deckData };

    return Resangular.all("decks").post(deck);
  };

  service.getDecks = function(){
    return Restangular.all("decks").getList();
  };



  return service;
}]);