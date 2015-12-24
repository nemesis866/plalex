/************************************************
Controlador principal de la aplicacion

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function MainController($routeParams, $scope, apiService, courseService, discusionService, displayDivService, fncService, storageFactory)
	{
		var vm = this;

		// Cambiamos el titulo (titulo por defecto)
		vm.titulo = 'PLALEX | Bienvenido a la plataforma de cursos';
		document.title = vm.titulo;

		// Mostramos plantilla por defecto
		vm.showTemplate = 'views/chapter.html';

		// Obtenemos los datos desde la API
		apiService.load({
			idCurso: storageFactory.idCurso,
			idUser: storageFactory.idUser
		});

		// Ocultamos una discusión
		this.closeDis = function ()
		{
			// Ocultamos el div menu-2
			var elem = document.getElementById('menu-2');
			fncService.transform(elem, 'translateX(100%)', 0.3);

			// Limpiamos el div
			document.getElementById('menu-1-content').innerHTML = '';
		};

		// Cambiamos el template del menu principal
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
			menuRouter: discusionService.menuRouter, // Router para las discusiones
			minimizar: discusionService.minimizar, // Minimizamos textarea de las discusiones
			mostrarDiscusion: discusionService.mostrarDiscusion, // Mostramos una discusion
			toolBox: discusionService.toolBox // Opciones del toolbox
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
				'fncService',
				'storageFactory',
				MainController
			]);
})();
