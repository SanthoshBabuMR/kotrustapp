define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/request module callback");

  var self;
  var model = function() {
    self              = this;
    self.appId        = ko.observable().syncWith('appId');
    self.approverId   = ko.observable().extend({required:true});
    self.remarks      = ko.observable();
    self._errors      = ko.validation.group([self.approverId]);
    self._cache       = ko.observable();
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