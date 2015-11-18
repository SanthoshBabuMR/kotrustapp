define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/request module callback");

  var self;
  var model = function() {
    self              = this;
    self.appId        = ko.observable();
    self.approverId   = ko.observable().extend({required:true});
    self.remarks      = ko.observable();
    self._errors      = ko.validation.group([self.email, self.password]);
    self._cache       = ko.observable();
  }; 
  model.prototype.validate = function() {
    if(self._errors().length){
      self._errors.showAllMessages();
      return false;
    }
    return true;
  };
  model.prototype.init = function(data) {
    self.appId(data.appId);
  }
  return model;
} );