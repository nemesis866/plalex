/************************************************
Controlador para la plantlla documentation.html

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function DocumentationController($scope, storageFactory)
	{
		var vm = this;

    // Asignamos las variables
    vm.asign = function ()
    {
      vm.userName = storageFactory.user.nombre;
    };

    $scope.$watch(vm.asign);
	}

	angular
		.module('app')
			.controller('documentationController', [
        '$scope',
				'storageFactory',
				DocumentationController
			]);
})();
