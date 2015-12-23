/************************************************
Servicio para las discusiones

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function ToolBoxService (fncService)
	{
    this.toolBox = function (id, identificador)
    {
      /***************************************************************
      Parametros:

      id.- Hace referencia al tipo de toolbox a utilizar
      identificador.- Hace referencia al elemento donde se utilizara
      ***************************************************************/

      var sel = '';
      var inner = '';
      var pos = '';
      var texto = '';

      // Opción para etiqueta insertar código
      if(id === 1){
    		// Obtenemos el texto seleccionado
    		sel = fncService.getCursorSelection(document.getElementById(identificador));
        // creamos un clon del texto sellecionado
        var clone = sel;

        // Verificamos si hay texto seleccionado
    		if(fncService.isEmpty(sel)){
    			// Si no hay texto seleccionado usamos uno por defecto
    			sel = '// aqui va el codigo';
    		}

    		inner = '[code]' + sel + '[/code]'; // Contenido a insertar
    		pos = fncService.getCursorPosition(document.getElementById(identificador)); // Obtenemos la posicion del puntero
    		texto = document.getElementById(identificador).value; // Obtenemos el contenido del textarea

    		// reemplazamos todo el contenido del textarea
        if(fncService.isEmpty(clone)){
          // Si no hubo texto seleccionado
    		  texto = texto.substr(0, pos) + inner + texto.substr(pos, texto.length);
        } else {
          // Si hubo texto seleccionado
          texto = texto.substr(0, pos) + inner + texto.substr(pos + sel.length, (texto.length + sel.length));
        }

    		document.getElementById(identificador).value = texto; // Reemplazamos el texto del textarea
    		fncService.setCursorPosition(document.getElementById(identificador), pos + (inner.length - 7)); // Colocamos el cursor al final del texto insertado
    		document.getElementById(identificador).focus(); // Hacemos focus al textarea
    	} else if(id === 2){
    		// Añadimos la opcion de negrita
    		sel = fncService.getCursorSelection(document.getElementById(identificador)); // Obtenemos seleccion
    		inner = '[b]' + sel + '[/b]';
    		pos = fncService.getCursorPosition(document.getElementById(identificador));
    		texto = document.getElementById(identificador).value;

    		// reemplazamos el texto
    		texto = texto.substr(0, pos) + inner + texto.substr(pos + sel.length, texto.length);

    		document.getElementById(identificador).value = texto;
    		fncService.setCursorPosition(document.getElementById(identificador), pos + inner.length);
    		document.getElementById(identificador).focus();
    	} else if(id === 3){
    		// Añadimos la opcion de cursiva
    		sel = fncService.getCursorSelection(document.getElementById(identificador)); // Obtenemos seleccion
    		inner = '[I]' + sel + '[/I]';
    		pos = fncService.getCursorPosition(document.getElementById(identificador));
    		texto = document.getElementById(identificador).value;

    		// reemplazamos el texto
    		texto = texto.substr(0, pos) + inner + texto.substr(pos + sel.length, texto.length);

    		document.getElementById(identificador).value = texto;
    		fncService.setCursorPosition(document.getElementById(identificador), pos + inner.length);
    		document.getElementById(identificador).focus();
    	} else if(id === 4){
    		// Añadimos la opcion de subrayado
    		sel = fncService.getCursorSelection(document.getElementById(identificador)); // Obtenemos seleccion
    		inner = '[u]' + sel + '[/u]';
    		pos = fncService.getCursorPosition(document.getElementById(identificador));
    		texto = document.getElementById(identificador).value;

    		// reemplazamos el texto
    		texto = texto.substr(0, pos) + inner + texto.substr(pos + sel.length, texto.length);

    		document.getElementById(identificador).value = texto;
    		fncService.setCursorPosition(document.getElementById(identificador), pos + inner.length);
    		document.getElementById(identificador).focus();
    	} else if(id === 5){
    		// Añadimos la opcion de tachado
    		sel = fncService.getCursorSelection(document.getElementById(identificador)); // Obtenemos seleccion
    		inner = '[t]' + sel + '[/t]';
    		pos = fncService.getCursorPosition(document.getElementById(identificador));
    		texto = document.getElementById(identificador).value;

    		// reemplazamos el texto
    		texto = texto.substr(0, pos) + inner + texto.substr(pos + sel.length, texto.length);

    		document.getElementById(identificador).value = texto;
    		fncService.setCursorPosition(document.getElementById(identificador), pos + inner.length);
    		document.getElementById(identificador).focus();
      }
  	};
  }

	angular
		.module('app')
			.service('toolBoxService', [
        'fncService',
				ToolBoxService
			]);
})();
