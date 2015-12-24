/************************************************
Servicio para cargar informaón del curso

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function ApiService (courseResource, discutionResource, userResource, storageFactory)
	{
		  this.load = function (data)
      {
        // Cargamos los datos del curso y despues disparamos el callback loadUSer
        courseResource.query({
          id: data.idCurso
        }, loadUser, error);
      };

      function loadDiscution (data)
      {
        // ALmacenamos la informacion del usuario en storage
        storageFactory.user = data[0];

				// Solicitamos información sobre las discusiones
				// Nuevas
				discutionResource.query({
					idCurso: storageFactory.idCurso,
					idUser: storageFactory.idUser,
					start: 0,
					type: 'nuevas'
				}, function (data){
					// ALmacenamos la informacion de las discusiones en storage
	        storageFactory.disNuevas = data;
				}, error);
				// Populares
				discutionResource.query({
					idCurso: storageFactory.idCurso,
					idUser: storageFactory.idUser,
					start: 0,
					type: 'populares'
				}, function (data){
					// ALmacenamos la informacion de las discusiones en storage
	        storageFactory.disPopulares = data;
				}, error);
				// No respondidas
				discutionResource.query({
					idCurso: storageFactory.idCurso,
					idUser: storageFactory.idUser,
					start: 0,
					type: 'no'
				}, function (data){
					// ALmacenamos la informacion de las discusiones en storage
	        storageFactory.disNo = data;
				}, error);
				// Propias
				discutionResource.query({
					idCurso: storageFactory.idCurso,
					idUser: storageFactory.idUser,
					start: 0,
					type: 'propias'
				}, function (data){
					// ALmacenamos la informacion de las discusiones en storage
	        storageFactory.disPropias = data;
				}, error);

        // Ocultamos la pantalla de intro
        hideIntro();
      }

      function loadUser (data)
      {
				// ALmacenamos la información del curso en storage
        storageFactory.course = data[0];

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
				'discutionResource',
        'userResource',
        'storageFactory',
				ApiService
			]);
})();
