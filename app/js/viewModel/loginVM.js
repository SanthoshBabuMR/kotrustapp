define( [ "jquery", "knockout", "restAPI", "util", "model/login", "model/register" ], function( $, ko, restAPI, util, login, register ) {
  "use strict";
  console.info("\texecuting js/viewModel/loginVM module callback");
  
  var instance = null;
  var loginVM = function() {
    var self            = this;
    self.login          = new login();
    self.register       = new register();
    self.resetEmail     = ko.observable().extend({required:true});
    self.view           = ko.observable('login');
    self.updateView     = function(v) {
      self.view(v);
    };
    self.submitLogin    = function() {
      if(self.login.validate()) {
        var xhr = restAPI.login(self.login);
        xhr.done( function(result, status){
          console.info('success');
          window.location.href = "/itrust.html"; /* mock code */
        } );
        xhr.fail( function(result, status){
          console.info('failure');
        } );
      }      
    };
    self.submitRegistration  = function() {
      if(self.register.validate()) {
        var xhr = restAPI.register(self.login);
        xhr.done( function(result, status){
          console.info('success');
          window.location.href = "/itrust.html"; /* mock code */
        } );
        xhr.fail( function(result, status){
          console.info('failure');
        } );
      } 
    };
    self.resetPassword = function() {
      var error = ko.validation.group(self.resetEmail);
      if(error().length) {
        return error.showAllMessages();
      }
      var xhr = restAPI.resetPassword(self.login);
        xhr.done( function(result, status){
          console.info('success');
          util.setNotification('please check your email for password!')          
        } );
        xhr.fail( function(result, status){
          console.info('failure');
        } );
      self.resetEmailMsg  = ko.observable(false);

    };
  };
  loginVM.getInstance = function() {
    return instance || ( instance = new loginVM() );
  };
  return loginVM.getInstance();
} );