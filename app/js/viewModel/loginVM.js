define( [ "jquery", "knockout", "restAPI", "model/login", "model/register" ], function( $, ko, restAPI, login, register ) {
  "use strict";
  console.info("\texecuting js/viewModel/loginVM module callback");
  
  var instance = null;
  var loginVM = function() {
    var self            = this;
    self.login          = login;
    self.register       = register;
    self.resetEmail     = ko.observable().extend({required:true});
    self.notification   = ko.observable();
    self.view           = ko.observable('login');
    self.updateView     = function(v) {
      self.view(v);
    };
    self.setNotification = function(v){
      self.notification(v);
      setTimeout( function(){
        self.notification(undefined);
      }, 5000);
    };
    self.submitLogin    = function() {
      if(self.login.validate()) {
        var xhr = restAPI.login(self.login);
        xhr.done( function(data, status){
          console.info('success');
        } );
        xhr.fail( function(data, status){
          console.info('failure');
        } );
      }      
    };
    self.submitRegistration  = function() {
      if(self.register.validate()) {
        var xhr = restAPI.register(self.login);
        xhr.done( function(data, status){
          console.info('success');
        } );
        xhr.fail( function(data, status){
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
        xhr.done( function(data, status){
          console.info('success');
          self.setNotification('please check your email for password!')          
        } );
        xhr.fail( function(data, status){
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