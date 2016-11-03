srs.factory("timeService", ['Restangular', function(Restangular){

  var service = {};

  service.getCurrentTime = function(){
    //return Restangular.customGET("current_time");
    return Restangular.all("current_time").getList();
  };

  return service;

}])