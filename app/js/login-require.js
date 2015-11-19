define( [ "jquery", "knockout", "util", "viewModel/loginVM" ], function( $, ko, util, loginVM ) {
  "use strict";
  console.info("\texecuting js/login-require module callback");

  ko.applyBindings(loginVM, $('.doc-wrap').get(0));	
  util.hideLoader();
} );
