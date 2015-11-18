define( [ "jquery", "knockout" ], function( $, ko ) {
  "use strict";
  console.info("\texecuting js/util module callback");

  var util = {};

  util.prepareJSON = function(key, value) {
    if(key.match(/$_/)){
      return undefined;
    }
  }
  
  util.setNotification = function(v){
  	$(".notification").hide();
	  $(".notification .message").text(v);
	  $(".notification").slideToggle();
	  setTimeout( function(){
	  	$(".notification").slideToggle();
	    $(".notification-message").text('');
	  }, 2000);
	};

  return util;
} );