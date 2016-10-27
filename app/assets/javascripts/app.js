var srs = angular.module('srs', ['ui.router', 'restangular', 'angularModalService']);



srs.config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
  }
]);

srs.config([
  'RestangularProvider',
  function(RestangularProvider) {

    
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);



srs.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("decks", {
      url: "/",
      abstract: true,
      template: "<div ui-view></div>"
    })


    .state("decks.index", {
      url: "",
      templateUrl: "/templates/decks/index.html",
      controller: "DecksCtrl"
    })

    .state("decks.show", {
      url: ":id",
      templateUrl: "/templates/decks/show.html",
      controller: "DeckCtrl"
    })

  
})











srs.factory("_", ['$window', function($window){
  return $window._;
}]);