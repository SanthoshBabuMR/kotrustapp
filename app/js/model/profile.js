define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/profile module callback");

  var model = function(data) {
    var self          = this;
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
    self._cache       = function(){};
    self.update(data);
  }; 
  ko.utils.extend(model.prototype, {
    update: function(d) {
      var data = d || {};
      var self = this;
      self.name(data.name);
      self.dob(data.dob);
      self.email(data.email);
      self.phone(data.phone);
      self.aadhaar(data.aadhaar);
      self.pan(data.pan);
      self.building(data.building);
      self.street(data.street);
      self.locality(data.locality);
      self.poname(data.poname);
      self.vtc(data.vtc);
      self.district(data.district);
      self.state(data.state);
      self.pincode(data.pincode);        
      //save off the latest data for later use
      self._cache.latestData = data;
    },
    commit: function(){
      var self = this;
      self._cache.latestData = ko.toJS(self);
    },
    revert: function() {
      var self = this;      
      self.update(self._cache.latestData);
      self._errors.showAllMessages(false);
    },
    validate: function() {
      var self = this;
      if(self._errors().length){
        self._errors.showAllMessages();
        return false;
      }
      return true;
    }
  });
  return model;
} );