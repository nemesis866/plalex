/************************************************
Filtro para mostrar solo una parte del contenido

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
  'use strict';

  function SubstrFilter ()
  {
    return function (text, limit)
    {
      var data = text.split('<');
  		var content = data[0].substr(0, limit);
  		content = content + ' ...';
  		content = content.charAt(0).toUpperCase() + content.slice(1);
  		//$nueva_contenido = $fnc->code($nueva_contenido);

      return content;
    };
  }

  angular
		.module('app')
			.filter('substr', SubstrFilter);
})();
