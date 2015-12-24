/************************************************
Controlador para las discusiones nuevas

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function Run ($templateCache)
	{
      $templateCache.put('views/discution.html');
	}

	angular
		.module('app')
			.run([
        '$templateCache',
				Run
			]);
})();
