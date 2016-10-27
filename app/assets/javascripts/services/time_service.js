srs.factory("timeService", ['Restangular', function(Restangular){

  var service = {};

  service.getCurrentTime = function(){
    return Restangular.customGET("current_time");
  };

  return service;

}])