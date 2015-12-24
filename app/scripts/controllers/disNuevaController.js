/************************************************
Controlador para las discusiones nuevas

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function DisNuevaController ($scope, discusionService, storageFactory)
	{
    var vm = this;

		// Metodos para el sistema de discusiones
		vm.dis = {
			viewDis: discusionService.viewDis // Mostramos una discusión
		};

    // Cargamos las discusiones desde el storage
    vm.discution = storageFactory.disNuevas;

    // Función encargada de verificar cambios en el storage
    vm.discutionControl = function ()
    {
      vm.discution = storageFactory.disNuevas;
    };

    // Ponemos funciones en escucha
    $scope.$watch(vm.discutionControl);
	}

	angular
		.module('app')
			.controller('disNuevaController', [
        '$scope',
				'discusionService',
        'storageFactory',
				DisNuevaController
			]);
})();
