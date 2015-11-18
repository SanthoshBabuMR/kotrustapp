define( [ "jquery", "jquery.mockjax" ], function( $ ) {
  "use strict";
  console.info("\texecuting js/mockAPI module callback");
  
  
  $.mockjax({
  	url              : '/rest/login',
  	contentType      : "application/json",
  	status           : 200,
  	responseText     : function() {
    		this.responseText = {
  			status    : 'success'
  		}
  	}
  });
  
  $.mockjax({
    url              : '/rest/register',
    contentType      : "application/json",
    status           : 200,
    responseText     : function() {
      this.responseText = {
        status    : 'success'
      }
    }
  });

  $.mockjax({
    url              : '/rest/resetPassword',
    contentType      : "application/json",
    status           : 200,
    responseText     : function() {
      this.responseText = {
        status    : 'success'
      }
    }
  });

  $.mockjax({
    url              : '/rest/updateProfile',
    contentType      : "application/json",
    status           : 200,
    responseText     : function() {
      this.responseText = {
        status    : 'success'
      }
    }
  });

} );