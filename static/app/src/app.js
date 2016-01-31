'use strict';

// Declare app level module which depends on views, and components
// angular.module('sadaqahApp', [
//   'ngRoute',
//   'sadaqahApp.view1',
//   'sadaqahApp.view2',
//   'sadaqahApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);


  var sadaqahApp = angular
      .module('sadaqahApp', ['ngMaterial',
			  'ngRoute',
			  'sadaqahApp.view1',
       			'users'])
      .config(function($mdThemingProvider, $mdIconProvider, $routeProvider){

          $mdIconProvider
              .defaultIconSet("./assets/svg/avatars.svg", 128)
              .icon("menu"       , "./assets/svg/menu.svg"        , 24)
              .icon("share"      , "./assets/svg/share.svg"       , 24)
              .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
              .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
              .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
              .icon("phone"      , "./assets/svg/phone.svg"       , 512);

              $mdThemingProvider.theme('default')
                  .primaryPalette('blue')
                  .accentPalette('red');

           $routeProvider.
					when('/AddNewOrder', {
					        templateUrl: './src/templates/add-order.html',
					        controller: 'AddOrderController'
					      }).
           			otherwise({redirectTo: '/view1'});
      });

	sadaqahApp.controller('AddOrderController', function($scope) {
	     
	    $scope.message = 'This is Add new order screen';
	     
	});      