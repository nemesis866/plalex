/************************************************
Configuración del router para la aplicación

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function config ($routeProvider, $locationProvider)
	{
		// Configuración de las rutas de la APP
		$routeProvider
			.when('/', {
				controller: 'mainController',
				controllerAs: 'vm',
				templateUrl: 'views/home.html'
			})
			.otherwise({
				redirectTo: '/'
		    });

		// Quitamos el hashtag de las url
		if(window.history && window.history.pushState) {
	       $locationProvider.html5Mode(true);
		}
	}

	angular
		.module('app')
			.config(['$routeProvider', '$locationProvider', config]);
})();
