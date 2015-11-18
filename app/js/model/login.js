define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/login module callback");

  var self;
  var model = function() {
    self             = this;
    self.email           = ko.observable().extend({required: true});
    self.password        = ko.observable().extend({required: true});
    self._errors         = ko.validation.group([self.email, self.password]);
    self._cache          = ko.observable();
  }; 
  model.prototype.validate = function() {
    if(self._errors().length){
      self._errors.showAllMessages();
      return false;
    }
    return true;
  };
  return model;
} );