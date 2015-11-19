define( [ "knockout" ], function( ko ) {
  "use strict";
  console.info("\texecuting js/model/request module callback");

  var self;
  var model = function(data) {
    self              = this;
    self.appId        = ko.observable().syncWith('appId');
    self.approverId   = ko.observable().extend({required:true});
    self.remarks      = ko.observable();
    self._errors      = ko.validation.group([self.approverId]);
    self._cache       = function(){};
    self.update(data);
  };
  ko.utils.extend(model.prototype, {
    update: function(d) {
      var data = d || {};
      var self = this;
      if(data.appId) {
        self.appId(data.appId);  
      }      
      self.approverId(data.approverId);
      self.remarks(data.remarks);
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
