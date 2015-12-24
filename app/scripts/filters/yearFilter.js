/************************************************
Filtro para mostrar solo el año de la fecha

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
  'use strict';

  function YearFilter ()
  {
    return function (fecha)
    {
      var data = fecha.split('-');
  		var data1 = data[2].split(' ');
  		// var data2 = data1[1].split(':');
  		var retval = data1[0] + '/' + data[1] + '/' + data[0];

  		return retval;
    };
  }

  angular
		.module('app')
			.filter('year', YearFilter);
})();
