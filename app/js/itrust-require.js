define( [ "jquery", "knockout", "viewModel/itrustVM" ], function( $, ko, itrustVM ) {
  "use strict";
  console.info("\texecuting js/itrust-require module callback");

  ko.applyBindings(itrustVM, $('.doc-wrap').get(0));	
  $('.doc-mask').removeClass('show');
} );