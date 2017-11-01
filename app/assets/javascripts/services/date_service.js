srs.factory("dateService", ['Restangular', function(Restangular){

  var service = {};

  service.getCurrentDate = function(){
    //return Restangular.customGET("current_time");
    //customGET not working so using odd workaround
    return Restangular.all("current_date").getList();
  };

  return service;

}])