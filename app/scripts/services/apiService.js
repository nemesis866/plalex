/************************************************
Servicio para cargar informaón del curso

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function ApiService (courseResource, userResource, storageFactory)
	{
		  this.load = function (data)
      {
        // Cargamos los datos del curso
        courseResource.query({
          id: data.idCurso
        }, loadAutor, error);
      };

      function loadAutor (data)
      {
        // ALmacenamos la informacion del curso en storage
        storageFactory.course = data[0];
        // Solicitamos la información del autor
        userResource.query({
          id: storageFactory.course.autor
        }, loadUser, error);
      }

      function loadDiscution (data)
      {
        // ALmacenamos la informacion del usuario en storage
        storageFactory.user = data[0];
        // Ocultamos la pantalla de intro
        hideIntro();
      }

      function loadUser (data)
      {
        // ALmacenamos la informacion del autor en storage
        storageFactory.author = data[0];
        // Solicitamos información del usuario
        userResource.query({
          id: storageFactory.idUser
        }, loadDiscution, error);
      }

      function error ()
      {
        console.log('Error al conectar con el servidor intente nuevamente');
      }

      function hideIntro ()
      {
        if(document.getElementById('intro')){
          var control = 0;

          document.getElementById('intro').style.opacity = 0;

          if(control === 0){
            setTimeout(function (){
              document.getElementById('intro').style.display = 'none';
            }, 1000);
          }


        }
      }
	}

	angular
		.module('app')
			.service('apiService', [
        'courseResource',
        'userResource',
        'storageFactory',
				ApiService
			]);
})();
