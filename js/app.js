
// Declare app level module which depends on filters, and services

angular.module('myApp',['ngRoute', 'ngAnimate', 'my_module', 'angularRangeSlider', 'ui.bootstrap']).config(function($routeProvider){  
	$routeProvider.when('/home', {templateUrl: 'home.html', controller: 'myCtrl'});
	$routeProvider.when('/profile', {templateUrl: 'profile.html', controller: 'myCtrlProfile'});
	$routeProvider.when('/gallary', {templateUrl: 'gallary.html', controller: 'myCtrlGallary'});
	$routeProvider.when('/clips', {templateUrl: 'clips.html', controller: 'myCtrlclips'});
	$routeProvider.when('/mp3', {templateUrl: 'mp3.html', controller: 'myCtrlMp3'});
	$routeProvider.when('/shops', {templateUrl: 'shops.html', controller: 'myCtrlShop'});
	$routeProvider.when('/cart', {templateUrl: 'cart.html', controller: 'myCtrlCart'});
	$routeProvider.when('/admin', {templateUrl: 'admin.html', controller: 'myAdminCtrl'});
	$routeProvider.when('/contact', {templateUrl: 'contact.html', controller: 'myContactCtrl'});
	
	$routeProvider.otherwise({redirectTo: '/home'});
});
    