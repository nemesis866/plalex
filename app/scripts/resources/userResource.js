/************************************************
Recurso para mostrar datos del un usuario

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function UserResource ($resource)
	{
    var url = 'http://api.dev/autor/:id/';

    return $resource(url);
	}

	angular
		.module('app')
			.service('userResource', [
        '$resource',
				UserResource
			]);
})();
