/************************************************
Servicio para mostrar datos del curso

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function CourseService (fncService, courseResource)
	{
    this.loadCourse = function (id)
    {
      courseResource.query({
				id: id
			}, success, error);
    };

    function success (data)
    {
      
    }

    function error ()
    {
      // Mostramos mensaje de error
      var msg = 'Error al conectar con el servidor intente nuevamente';

			fncService.error(msg);
    }
	}

	angular
		.module('app')
			.service('courseService', [
        'fncService',
        'courseResource',
				CourseService
			]);
})();
