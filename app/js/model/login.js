define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/login module callback");

  var model = function(data) {
    var self             = this;
    self.email           = ko.observable().extend({required: true});
    self.password        = ko.observable().extend({required: true});
    self._errors         = ko.validation.group([self.email, self.password]);
    self._cache          = function(){};
    self.update(data);
  }; 
  ko.utils.extend(model.prototype, {
    update: function(d) {
      var data = d || {};
      var self = this;
      self.email(data.approverId);
      self.password(data.remarks);
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
