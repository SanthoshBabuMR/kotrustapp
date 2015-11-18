define( [ "knockout", "knockoutAMDHelpers", "knockoutValidation" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/setup module callback");
  
  ko.bindingHandlers.module.baseDir = "/app/js/model"
  ko.amdTemplateEngine.defaultPath = "/app/template/";
  ko.amdTemplateEngine.defaultSuffix = ".template.html";

  ko.validation.init({
  	insertMessages: true,
  	decorateInputElement: true,
  	errorClass: 'input-error',
  	registerExtenders: true
  });
  
} );