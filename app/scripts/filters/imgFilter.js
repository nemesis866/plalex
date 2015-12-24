/************************************************
Filtro para mostrar la imagen de perfil

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
  'use strict';

  function ImgFilter (fncService)
  {
    return function (fbid, avatar)
    {
      var url = '';

      // Verificamos si el usuario tiene ID de facebook
      if(!fncService.isEmpty(fbid)){
        // Si tiene mostramos url para facebook
        url = 'http://graph.facebook.com/' + fbid + '/picture?type=large';
      } else {
        // Si no tiene utilizamos el path del avatar
        url = 'http://codeando.org/avatar/' + avatar;
      }

  		return url;
    };
  }

  angular
		.module('app')
			.filter('img', [
        'fncService',
        ImgFilter
      ]);
})();
