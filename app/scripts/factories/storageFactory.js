/************************************************
Factory para compartir datos entre los controladores

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function StorageFactory()
	{
    var storage = {
      cacheDiscusion: '', // Cache para el formulario de discusion
      course: '', // Datos del curso y del autor
			disNuevas: '', // Discusiones nuevas
			disPopulares: '', // Discusiones populares
			disNo: '', // Discusiones no respondidas
			disPropias: '', // Discusiones propias
			disTemp: '', // Plantilla temporal para las discusiones
      idCurso: '6', // ID del curso
      idUser: '3', // ID del usuario
      navDisTemplate: 'views/dis_nuevas.html', // Template por defecto (discusiones)
      navTemplate: 'views/documentation.html', // Template por defecto (menu)
      user: '' // Datos del usuario
    };

    return storage;
	}

	angular
		.module('app')
			.factory('storageFactory', [
				StorageFactory
			]);
})();
