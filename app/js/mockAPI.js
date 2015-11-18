define( [ "jquery", "jquery.mockjax" ], function( $ ) {
  "use strict";
  console.info("\texecuting js/mockAPI module callback");
    
  $.mockjax({
    url              : '/rest/requestData',
    contentType      : "application/json",
    status           : 200,
    response         : function() {
        this.responseText = {
        status    : 'success',
        data      : {
          appId   : 965412,
          requestList : [
            {
              requestId: 'REQ_6542',
              approverId: 965412,
              remarks: 'please approve',
              status: 'approved'
            },
            {
              requestId: 'REQ_6143',
              approverId: 965412,
              remarks: 'request approval for opening bank account',
              status: 'pending'
            }
          ]
        }
      }
    }
  });

  $.mockjax({
  	url              : '/rest/login',
  	contentType      : "application/json",
  	status           : 200,
  	response         : function() {
    		this.responseText = {
  			status    : 'success'
  		}
  	}
  });
  
  $.mockjax({
    url              : '/rest/register',
    contentType      : "application/json",
    status           : 200,
    response         : function() {
      this.responseText = {
        status    : 'success'
      }
    }
  });

  $.mockjax({
    url              : '/rest/resetPassword',
    contentType      : "application/json",
    status           : 200,
    response         : function() {
      this.responseText = {
        status    : 'success'
      }
    }
  });

  $.mockjax({
    url              : '/rest/updateProfile',
    contentType      : "application/json",
    status           : 200,
    response         : function() {
      this.responseText = {
        status    : 'success'
      }
    }
  });

  $.mockjax({
    url              : '/rest/sendRequest',
    contentType      : "application/json",
    status           : 200,
    response         : function() {
      this.responseText = {
        status    : 'success'
      }
    }
  });

  $.mockjax({
    url              : '/rest/getRequestList',
    contentType      : "application/json",
    status           : 200,
    response         : function() {
      this.responseText = {
        status    : 'success',
        data      : [
          {
            requestId: 'REQ_6542',
            approverId: 965412,   
            remarks: 'please approve',
            status: 'approved'
          },
          {
            requestId: 'REQ_6143',
            approverId: 965412,
            remarks: 'request approval for opening bank account',
            status: 'pending'
          }
        ]
      }
    }
  });

} );