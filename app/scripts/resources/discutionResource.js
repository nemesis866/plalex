/************************************************
Recurso para mostrar discusiones de un curso

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function DiscutionResource ($resource)
	{
    var url = 'http://api.dev/cursos/:idCurso/discusiones/:type/:start/:idUser';

    return $resource(url);
	}

	angular
		.module('app')
			.service('discutionResource', [
        '$resource',
				DiscutionResource
			]);
})();
