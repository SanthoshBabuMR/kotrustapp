define( [ "jquery", "knockout", "util", "mockAPI" ], function( $, ko, util ) {
  "use strict";
  console.info("\texecuting js/restAPI module callback");

  var api =  {};
 
  api.login   = function(data){
  	return $.ajax({
  		url        : '/rest/login',
  		data       : JSON.stringify(data, util.prepareJSON),
  		dataType   : 'json',
  		type       : 'POST'
  	});
  };

  api.register   = function(data){
  	return $.ajax({
  		url        : '/rest/register',
  		data       : JSON.stringify(data, util.prepareJSON),
  		dataType   : 'json',
  		type       : 'POST'
  	});
  };

  api.resetPassword   = function(data){
  	return $.ajax({
  		url        : '/rest/resetPassword',
  		data       : JSON.stringify(data, util.prepareJSON),
  		dataType   : 'json',
  		type       : 'POST'
  	});
  };

  api.updateProfile   = function(data){
    return $.ajax({
      url        : '/rest/updateProfile',
      data       : JSON.stringify(data, util.prepareJSON),
      dataType   : 'json',
      type       : 'POST'
    });
  };
  
  return api;
} );