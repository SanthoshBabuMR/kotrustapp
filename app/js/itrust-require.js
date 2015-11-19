define( [ "jquery", "knockout", "util", "restAPI", "viewModel/itrustVM" ], function( $, ko, util, restAPI, itrustVM ) {
  "use strict";
  console.info("\texecuting js/itrust-require module callback");
  
  var xhr = restAPI.requestData();
	xhr.done( function(result, status){
	  console.info('success');
	  itrustVM.init(result.data);
	  ko.applyBindings(itrustVM, $('.doc-wrap').get(0));	
          util.hideLoader();
	} );
	xhr.fail( function(result, status){
	  console.info('failure');
	} );

} );
