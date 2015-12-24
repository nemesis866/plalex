/************************************************
Servicio para las discusiones

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function DiscusionService ($rootScope, fncService, toolBoxService, storageFactory)
	{
		// Definimos variables locales
		$rootScope.controlForm = 0;

    // Router para el menu de las discusiones
    this.menuDiscusion = function (id)
    {
      // Obtenemos los items del menu
      var elements = document.querySelectorAll('.controls');

      // Agregamos - quitamos la clase actived
      for(var i = 0; i < elements.length; i++){
        var dataType = parseInt(elements[i].getAttribute('data-type'));

        if(id === dataType){
          fncService.addClass(elements[i], 'actived');
        } else {
          fncService.removeClass(elements[i], 'actived');
        }
      }

      // Cambiamos el template segun la ruta
			if(id === 1){
				storageFactory.navDisTemplate = 'views/dis_nuevas.html';
			} else if(id === 2){
				storageFactory.navDisTemplate = 'views/dis_populares.html';
			} else if(id === 3){
				storageFactory.navDisTemplate = 'views/dis_no_respondidas.html';
			} else if(id === 4){
				storageFactory.navDisTemplate = 'views/dis_propias.html';
			}
    };

    // Router para el munu principal
		this.menuRouter = function (id)
		{
      // Obtenemos los items del menu
      var elements = document.querySelectorAll('.items');

      // Agregamos - quitamos la clase actived
      for(var i = 0; i < elements.length; i++){
        var dataType = parseInt(elements[i].getAttribute('data-type'));

        if(id === dataType){
          fncService.addClass(elements[i], 'actived');
        } else {
          fncService.removeClass(elements[i], 'actived');
        }
      }

      // Acciones a tomar cuando no ingresemos en la ruta de discusiones
      if(id !== 2){
        // Verificamos si estabamos en el template discusiones
        if(document.getElementById('content_dis')){
					// Verifificamos si el textarea de discusiones esta activado
          if($rootScope.controlForm === 1){
						// Obtenemos el contenido del textarea de discusiones
            storageFactory.cacheDiscusion = document.getElementById('content_dis').value;
          }

          // Si no hay datos reseteamos el control del formulario
          $rootScope.controlForm = 0;

					// Si la discusión se almaceno en el storage mostramos mensajes
          if(storageFactory.cacheDiscusion.length !== 0){
						fncService.success('Su discusión se almaceno en la cache, para su publicación');
          }
	      }

				// Cambiamos el template segun la ruta
				if(id === 1){
					storageFactory.navTemplate = 'views/documentation.html';
				} else if(id === 3){
					storageFactory.navTemplate = 'views/note.html';
				} else if(id === 4){
					storageFactory.navTemplate = 'views/search.html';
				}
			} else {
				// Mostramos la plantilla de discusiones
				storageFactory.navTemplate = 'views/discution.html';
			}
		};

    // Mostramos el formulario para crear discusiones
		this.mostrarDiscusion = function ()
		{
      if($rootScope.controlForm === 0){
				// Modificamos valor para no recibir mas peticiones
				$rootScope.controlForm = 1;

        mostrarTextarea();
			} else {
        mostrarTextarea();
      }
		};

    // Minimizamos el textarea
    this.minimizar = function ()
    {
      // Guardamos el contenido en la cache
      if($rootScope.controlForm === 1){
        storageFactory.cacheDiscusion = document.getElementById('content_dis').value;
      }

      // Borramos el contenido
      document.getElementById('content_dis').value = '';

      // Ocultamos las opciones del toolbox
      document.getElementById('resp_toolbox').style.display = 'none';

      // Ocultamos boton submit
      var elements = document.getElementById('form_discusion').querySelectorAll('.submit');

      for(var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
      }

      // Asignamos altura al textarea
      document.getElementById('content_dis').style.height = '25px';
      document.getElementById('content_dis').style.minHeight = '25px';

      // Ocultamos los archivos
      document.getElementById('content_dis_files').style.display = 'none';

      // Reseteamos el control del formulario
      $rootScope.controlForm = 0;
    };

    // Inyectamos un toolbox en el textarea
    this.toolBox = function (id, identificador)
    {
      toolBoxService.toolBox(id, identificador);
    };

    // Mostramos el textarea
    function mostrarTextarea ()
    {
      // Agregamos los datos al textarea
      if(storageFactory.cacheDiscusion.length > 0){
        document.getElementById('content_dis').value = storageFactory.cacheDiscusion;
      }

      // Agregamos el efecto de transition
      document.getElementById('content_dis').style.transition = 'all 0.25s ease';
      document.getElementById('content_dis').style.webkitTransition = 'all 0.25s ease';

      // Mostramos las opciones del toolbox
      document.getElementById('resp_toolbox').style.display = 'block';

      // Mostramos boton submit
      var elements = document.getElementById('form_discusion').querySelectorAll('.submit');

      for(var i = 0; i < elements.length; i++){
        elements[i].style.display = 'inline-block';
      }

      // Asignamos altura al textarea
      document.getElementById('content_dis').style.height = '100px';
      document.getElementById('content_dis').style.minHeight = '100px';

      // Solo activamos el gestor de archivos si no nos visitan desde un movil
      var device = navigator.userAgent;
      var valor = device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i);

      if(!valor){
        // Mostramos el area para arrastrar archivos
        document.getElementById('content_dis_files').style.display = 'block';
        // Activamos arrastrar y soltar para archivos
        //files(control_files);
        /*
        // Eliminamos los archivos anteriores
        ajax('include/server_files.php',{
          type: 'delete'
        }, function (data){
          // Archivos eliminados
        }, 'Json');
        */
      }
    }

		// Mostramos una discusión
		this.viewDis = function (idDis)
		{
			// Mostramos el div menu-2
			var elem = document.getElementById('menu-2');
			fncService.transform(elem, 'translateX(0)', 0.3);
		};
	}

	angular
		.module('app')
			.service('discusionService', [
				'$rootScope',
        'fncService',
        'toolBoxService',
        'storageFactory',
				DiscusionService
			]);
})();
