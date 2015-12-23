/************************************************
Controlador principal de la aplicacion

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function MainController($routeParams, $scope, apiService, courseService, discusionService, displayDivService, storageFactory)
	{
		var vm = this;

		// Cambiamos el titulo (titulo por defecto)
		vm.titulo = 'PLALEX | Bienvenido a la plataforma de cursos';
		document.title = vm.titulo;

		// Mostramos plantilla por defecto
		vm.showTemplate = 'views/chapter.html';

		// Obtenemos los parametros y redirigimos (Pruebas)
		storageFactory.idCurso = $routeParams.idCurso || 1;
		storageFactory.idUser = $routeParams.idUser || 3;

		// Obtenemos los datos desde la API
		apiService.load({
			idCurso: storageFactory.idCurso,
			idUser: storageFactory.idUser
		});

		vm.changeNavTemplate = function ()
		{
			vm.navTemplate = storageFactory.navTemplate;
		};

		// Cambiamos la url
		//history.replaceState({},'', '/');

		// Acomodamos los tamaños de los divs
		vm.displayDiv = function ()
		{
			displayDivService.display();
		};

		// Metodos para el sistema de discusiones
		vm.dis = {
			menuRouter: discusionService.menuRouter,
			minimizar: discusionService.minimizar,
			mostrarDiscusion: discusionService.mostrarDiscusion,
			toolBox: discusionService.toolBox
		};

		// Ponemos tareas en escucha
		$scope.$watch(vm.displayDiv);
		$scope.$watch(vm.changeNavTemplate);
	}

	angular
		.module('app')
			.controller('mainController', [
				'$routeParams',
				'$scope',
				'apiService',
				'courseService',
				'discusionService',
				'displayDivService',
				'storageFactory',
				MainController
			]);
})();
