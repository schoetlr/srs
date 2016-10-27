srs.factory("deckService", ['Restangular', function(Restangular){

  var service = {};

  service.createDeck = function(deckData){
    var deck = { deck: deckData };

    return Restangular.all("decks").post(deck);


  };

  service.getDecks = function(){
    return Restangular.all("decks").getList();
  };

  service.updateDeck = function(deck){
    return deck.patch();
  };

  service.destroyDeck = function(deck){
    deck.remove();
  };

  return service;
}]);