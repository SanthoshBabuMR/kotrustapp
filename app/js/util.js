define( [ "jquery", "knockout" ], function( $, ko ) {
  "use strict";
  console.info("\texecuting js/util module callback");

  var util = {};

  util.prepareJSON = function(key, value) {
    if(key.match(/$_/)){
      return undefined;
    }
  }
  
  return util;
} );