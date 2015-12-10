/************************************************
Controlador principal de la aplicacion

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function MainController($scope, fbService, fncService, loginService)
	{
		var vm = this;

		// Cambiamos el titulo
		document.title = 'PLALEX | Bienvenido a la plataforma de cursos';
	}

	angular
		.module('app')
			.controller('mainController', [
				MainController
			]);
})();
