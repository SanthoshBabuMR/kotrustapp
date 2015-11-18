define( [ "jquery", "knockout", "viewModel/loginVM" ], function( $, ko, loginVM ) {
  "use strict";
  console.info("\texecuting js/login-require module callback");

  ko.applyBindings(loginVM, $('.doc-wrap').get(0));	
  $('.doc-mask').removeClass('show');
} );