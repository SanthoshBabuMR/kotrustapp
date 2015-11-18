define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/profile module callback");

  var self;
  var model = function() {
    self              = this;
    self.name         = ko.observable();
    self.dob          = ko.observable();
    self.email        = ko.observable();
    self.phone        = ko.observable();
    self.aadhaar      = ko.observable();
    self.pan          = ko.observable();
    self.building     = ko.observable();
    self.street       = ko.observable();
    self.locality     = ko.observable();
    self.poname       = ko.observable();
    self.vtc          = ko.observable();
    self.district     = ko.observable();
    self.state        = ko.observable();
    self.pincode      = ko.observable();
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
  return model;
} );