		//Definicija modula
		var metHotelsApp = angular.module('MetHotelsApp',['ngRoute','ngCookies']);
		
		//Definicija servisa
		metHotelsApp.service('userService', function ($cookies){
        
			this.insertUser = function (ime, prezime, username, password) {
					
				$.ajax({
				  type: "POST",
				  url: "insertUser.php",
				  contentType: "application/json; charset=utf-8",
				  data: JSON.stringify({ ime:ime, prezime:prezime, username:username, password:password}),
				  success: function(data){
					  console.log("Insert user rezultat:" + data);
					  var response = JSON.parse(data);
					  if(response.result =="success"){
						window.location = "prijava.php";
					  }			  
				  }
			})};
			
			this.login = function (username, password) {
				$.ajax({
				  type: "POST",
				  url: "login.php",
				  contentType: "application/json; charset=utf-8",
				  data: JSON.stringify({ username:username, password:password}),
				  success: function(data){
					  
					  var response = JSON.parse(data);
					  
					  if(response.result == "true"){
						  
						$cookies.put('CurrentUser', username);
						window.location = "index.php";
						
					  }
					  else{
						  
						  alert('Neispravna lozinka ili korisnicko ime!');
						  
					  }
				  }
			})};
			
        });
		
		// Definicija kontrolera
		metHotelsApp.controller('HomeController',function ($scope, $cookies) {
			
			$scope.username = $cookies.get('CurrentUser');
			
			$scope.userPresent = function(){
				
				return $scope && $scope.username != "" && $scope.username != null && $scope.username !== undefined;
			}
			
			$scope.logOut = function(){
				$cookies.remove('CurrentUser');
				$scope.username = null;
			}
		});
		
		metHotelsApp.controller('RegistrationController', function ($scope, userService) {
			
			$scope.ime="";
			$scope.prezime="";
			$scope.username="";
			$scope.password="";
			
			$scope.insertUser = function(){
				
				userService.insertUser($scope.ime, $scope.prezime, $scope.username, $scope.password);
			};
		});
		
		metHotelsApp.controller('LoginController', function ($scope, userService) {

			$scope.username="";
			$scope.password="";
			
			$scope.login = function(){
				
				userService.login($scope.username, $scope.password);
			} 
		});
		
		// Definicija ruta
		metHotelsApp.config(function ($routeProvider) {
			console.log($routeProvider);
			$routeProvider
				.when('/',
					{
						controller: 'HomeController',
						templateUrl: './partials/home.html'
					})
				
				.when('/register',
					{
						controller: 'RegistrationController',
						templateUrl: './partials/register.html'
					})
				.when('/login',
					{
						controller: 'LoginController',
						templateUrl: './partials/prijava.html'
					})
				.otherwise({ redirectTo: './partials/home.html' });
		});