/************************************************
Filtro para reemplazar formato personalizado por
html

Proyecto: plalex.com
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
  'use strict';

  function HtmlReplaceFilter ()
  {
    return function (content)
    {
      var codigo = new Array('[-','-]','&-','--|','-&','text/htm','--&gt;');
  		var replace = new Array('&lt;','&gt;','(','))',')','text/html','-->');

      for(var i=0; i <= codigo.length; i++){
    		while(content.indexOf(codigo[i]) >= 0){
    			content = content.replace(codigo[i], replace[i]);
    		}
    	}

  		return content;
    };
  }

  angular
		.module('app')
			.filter('htmlReplace', HtmlReplaceFilter);
})();
