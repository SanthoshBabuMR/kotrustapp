define( [ "jquery", "knockout", "restAPI", "util", "model/profile" ], function( $, ko, restAPI, util, profile ) {
  "use strict";
  console.info("\texecuting js/viewModel/itrustVM module callback");
  
  var instance = null;
  var itrustVM = function() {
    var self               = this;
    self.notification      = ko.observable();  
    self.view              = ko.observable('profile');
    self.profile           = profile;
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
    }
  }
  itrustVM.getInstance = function() {
    return instance || ( instance = new itrustVM() );
  }
  return itrustVM.getInstance();
} );