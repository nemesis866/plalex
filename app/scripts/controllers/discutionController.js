/************************************************
Controlador para las discusiones

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function DiscutionController($scope, discusionService, storageFactory)
	{
		var vm = this;

		// Metodos para el sistema de discusiones
		vm.dis = {
      menuDiscusion: discusionService.menuDiscusion, // Router para el menu de discusión
			menuRouter: discusionService.menuRouter, // Router para el menu de discusiones
			minimizar: discusionService.minimizar, // Minimizamos el textarea de las discusiones
			mostrarDiscusion: discusionService.mostrarDiscusion, // Mostramos el textarea para crear discusiones
			toolBox: discusionService.toolBox, // Acciones para los botones del toolbox
		};

    // Cambios el template
    vm.changeNavDisTemplate = function ()
		{
			vm.navDisTemplate = storageFactory.navDisTemplate;
		};

    // Ponemos en escucha
    $scope.$watch(vm.changeNavDisTemplate);
	}

	angular
		.module('app')
			.controller('discutionController', [
        '$scope',
				'discusionService',
				'storageFactory',
				DiscutionController
			]);
})();
