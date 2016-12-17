'use strict';

angular.module('uiApp')
  .controller('ComputadorasCtrl', function (NgTableParams,dialogs) {
   var vm =this;
   /* $http.get("db/computers.json").success(function(response){
      console.log("res:", response);
      //alert("res:" + response);
      vm.compus = response.computers;
    });*/

    var computers = [
      
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
        activate();
        function activate()
        {
            vm.tableParams = new NgTableParams(
            {},
            {
                //dataset:vm.computers
                filterDelay: 0,
                getData: getData
            });

            
        }
        function getData(params){
            var compus = computers;
            console.log(vm.compus);
            return compus;
        }

        function editCompu(row){

            var options = {
                size:'lg',
                animation:true
            };

            var showModalEdit = dialogs.create(
            'app/main/categorias/computadoras/edit-computer/edit-computer.html',
            ,'vmEditComputer',
            row,
            options,
            'vmComputerEdit');

            dialog.result.then(function(s){
                activate();
            
            });

        }


  });
