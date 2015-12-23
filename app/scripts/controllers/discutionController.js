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
      menuDiscusion: discusionService.menuDiscusion,
      // Router para el menu de discusiones
			menuRouter: discusionService.menuRouter,
			minimizar: discusionService.minimizar,
			mostrarDiscusion: discusionService.mostrarDiscusion,
			toolBox: discusionService.toolBox
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
