/************************************************
Servicio que controla el tamaño de los divs

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function DisplayDivService ()
	{
		this.display = function ()
		{
      intro();
		  sizes();
		};

		window.onresize = function ()
    {
      intro();
      sizes();
    };

    function sizes ()
    {
      // Obtenemos el alto de la pantalla menos la altura del header
			var height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 40;
      // Obtenemos el alto para el contenido del menu
      var heightMenuPrincipal = document.getElementById('menu-1').style.pixelHeight || document.getElementById('menu-1').offsetHeight;
      var heightMenuLabels = document.getElementById('menu-labels').style.pixelHeight || document.getElementById('menu-labels').offsetHeight;
      var heightMenuContent = heightMenuPrincipal - heightMenuLabels - 26;

      // Asignamos la altura de los div
			document.getElementById('page-1').style.height = height + 'px';
			document.getElementById('menu-1').style.height = height + 'px';

      // Asignamos la altura del menu-content
      document.getElementById('menu_content').style.height = heightMenuContent + 'px';
    }

    function intro ()
    {
      // Configuramos la página Intro
      if(document.getElementById('intro')){
        var height = (window.screen.height / 2) - 100;

        document.getElementById('intro').style.paddingTop = height+'px';
      }
    }
	}

	angular
		.module('app')
			.service('displayDivService', [
				DisplayDivService
			]);
})();
