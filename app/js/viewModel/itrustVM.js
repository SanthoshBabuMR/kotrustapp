define( [ "jquery", "knockout", "restAPI", "util", "model/profile", "model/request" ], function( $, ko, restAPI, util, profile, request ) {
  "use strict";
  console.info("\texecuting js/viewModel/itrustVM module callback");
  
  var instance = null;
  var itrustVM = function() {
    var self               = this;
    self.notification      = ko.observable();  
    self.view              = ko.observable('profile');
    self.appId             = ko.observable();
    self.profile           = new profile();
    self.request           = new request();
    self.updateView     = function(v) {
      self.view(v);
    };
    self.updateProfile  = function() {
      if(self.profile.validate()) {
        var xhr = restAPI.updateProfile(self.profile);
        xhr.done( function(data, status){
          console.info('success');
          util.setNotification('profile updated successfully');
        } );
        xhr.fail( function(data, status){
          console.info('failure');
        } );
      }   
    };
    self.sendRequest  = function() {
      if(self.request.validate()) {
        var xhr = restAPI.sendRequest(self.profile);
        xhr.done( function(data, status){
          console.info('success');
          util.setNotification('request sent successfully.');
        } );
        xhr.fail( function(data, status){
          console.info('failure');
        } );
      }   
    };
    self.init = function(d) {
      var data = d || {};
      self.appId( data.appId );
    }
  }
  itrustVM.getInstance = function() {
    return instance || ( instance = new itrustVM() );
  }
  return itrustVM.getInstance();
} );