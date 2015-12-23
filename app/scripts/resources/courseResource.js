/************************************************
Recurso para mostrar datos del curso

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function CourseResource ($resource)
	{
    var url = 'http://api.dev/cursos/:id/';

    return $resource(url);
	}

	angular
		.module('app')
			.service('courseResource', [
        '$resource',
				CourseResource
			]);
})();
