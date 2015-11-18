define( [ "jquery", "knockout", "util", "mockAPI" ], function( $, ko, util ) {
  "use strict";
  console.info("\texecuting js/restAPI module callback");

  var api =  {};
  

  api.requestData   = function(data){
    return $.ajax({
      url        : '/rest/requestData',
      dataType   : 'json',
      type       : 'GET'
    });
  };

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

  api.sendRequest   = function(data){
    return $.ajax({
      url        : '/rest/sendRequest',
      data       : JSON.stringify(data, util.prepareJSON),
      dataType   : 'json',
      type       : 'POST'
    });
  };
  
  return api;
} );