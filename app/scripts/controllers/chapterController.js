/************************************************
Controlador para la plantlla chapter

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function ChapterController($scope, storageFactory)
	{
		var vm = this;

    // Asignamos las variables
    vm.asign = function ()
    {
      vm.authorName = storageFactory.course.nombre;
      vm.subtitulo = storageFactory.course.subtitulo;
      vm.titulo = storageFactory.course.titulo;

      // Cambiamos el titulo (titulo por defecto)
  		document.title = storageFactory.course.titulo + ' | Plalex';
    };

    $scope.$watch(vm.asign);
	}

	angular
		.module('app')
			.controller('chapterController', [
        '$scope',
				'storageFactory',
				ChapterController
			]);
})();
