define( [ "jquery", "knockout", "restAPI" ], function( $, ko, restAPI ) {
  "use strict";
  console.info("\texecuting js/viewModel/itrustVM module callback");
  
  var instance = null;
  var itrustVM = function() {
    var self            = this;    
  }
  itrustVM.getInstance = function() {
    return instance || ( instance = new itrustVM() );
  }
  return itrustVM.getInstance();
} );