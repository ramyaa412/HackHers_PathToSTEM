angular.module('app.services', [])

.factory('SchoolService', ['$http','$q',function($http,$q){

	return {
		getSchools:function() {
			var deferred = $q.defer();
			console.log("inside get schools")
			url = 'schoolList.json';
			console.log(url);

		var json = require('./schoolList.json');
		 return $.getJSON(url,function(json)
		 {
		 	console.log(json);
		 });


		 	/*.then(function(res))){
			console.log(res);
				var results = res.data.map(function(result) {
					return result;
				});
				deferred.resolve(results);
			},
            function(response){
                console.log("error in services");
                console.log(response);
            });*/
		}
	}
}])


.service('BlankService', [function(){

}]);