'use strict';

angular.module('uiApp')
  .controller('ComputadorasCtrl', function (NgTableParams) {
   var vm =this;
   /* $http.get("db/computers.json").success(function(response){
      console.log("res:", response);
      //alert("res:" + response);
      vm.compus = response.computers;
    });*/

    vm.computers = [
      
		{
			"id": 1, 
			"marca": "DELL", 
            "modelo": "Latitude 6430u",
            "precio": "1000" 
		}, { 
			"id": 2, 
			"marca": "HP", 
            "modelo": "Pavilion 1234A",
            "precio": "800" 
		},
        { 
			"id": 3, 
			"marca": "LENOVO", 
            "modelo": "T880",
            "precio": "750" 
		},
        { 
			"id": 4, 
			"marca": "APPLE", 
            "modelo": "IMAC215",
            "precio": "1900" 
		},
        { 
			"id": 5, 
			"marca": "TOSHIBA", 
            "modelo": "TSH 123t",
            "precio": "800" 
		}

    ];


    vm.tableParams = new NgTableParams(
      {},
      {
        dataset:vm.computers
      }
    );
    console.log(vm.computers);

  });
