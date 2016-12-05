'use strict';

angular.module('uiApp')
  .controller('LoginCtrl', function ($state,$location) {
    var vm = this;
    
    
    //vm.datos = User.query();
    vm.users =  [ 
		{
			"id": 1, 
			"usuario": "roberto.perez@gmail.com", 
            "password": "roberto" 
		}, { 
			"id": 2,
			"usuario": "maria.lopez@gmail.com", 
			"password": "maria" 
		},{ 
			"id": 3,
			"usuario": "aperez", 
			"password": "pass" 
		}
	] ;
    
    vm.dataOk = false;

    vm.loginUser = function(){
        console.log(vm.users);
   alert("Username: "+ vm.username+"      "+ "Password:"+ vm.password);
    var loggedin = false;
    //var TotalUsers = vm.users.length;
     angular.forEach(vm.users,function(value,key){
         if(value.usuario === vm.username && value.password === vm.password)
         {
              alert("Username: "+ value.usuario+"      "+ "Password:"+ value.password);
             loggedin = true;
             //break;
         }
     });

     if(loggedin === true)
     {
         alert("login successfull");
         $state.go('categorias');
     }
     else{
         alert("Username or Password dont exist!!!");
     }
    }

    

  });
