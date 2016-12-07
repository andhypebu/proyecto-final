'use strict';

angular.module('uiApp')
  .controller('CelularesCtrl', function (NgTableParams) {
   var vm =this;
   /* $http.get("db/computers.json").success(function(response){
      console.log("res:", response);
      //alert("res:" + response);
      vm.compus = response.computers;
    });*/

    vm.celulares = [
      
		{
			"id": 1, 
			"marca": "SONY", 
            "modelo": "GDTRF-3746",
            "precio": "450" 
		}, { 
			"id": 2, 
			"marca": "SAMSUNG", 
            "modelo": "S7 Edge",
            "precio": "600" 
		},
        { 
			"id": 3, 
			"marca": "HTC", 
            "modelo": "M7",
            "precio": "200" 
		},
        { 
			"id": 4, 
			"marca": "HUAWEI", 
            "modelo": "GRPS",
            "precio": "200" 
		},
        { 
			"id": 5, 
			"marca": "APPLE", 
            "modelo": "7",
            "precio": "750" 
		}

    ];


    vm.tableParams = new NgTableParams(
      {},
      {
        dataset:vm.celulares
      }
    );
    console.log(vm.celulares);
  });
