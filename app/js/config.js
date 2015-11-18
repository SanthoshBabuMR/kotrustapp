/* set environment variables for browser */
var browserConfig = {
	envType: "dev"
};

/* configure requirejs */
require.config({
	baseUrl : "js/",
	paths   : {
		// vendor libraries
		"knockout"              : "vendor/knockout-3.3.0",            // http://knockoutjs.com/downloads/
		"knockoutAMDHelpers"    : "vendor/knockout-amd-helpers.min",  // https://github.com/rniemeyer/knockout-amd-helpers
		"knockoutValidation"    : "vendor/knockout.validation.min",   // https://github.com/Knockout-Contrib/Knockout-Validation
		"knockoutPostBox"       : "vendor/knockout-postbox.min",   // https://github.com/rniemeyer/knockout-postbox
		"text"                  : "vendor/text",                      // http://requirejs.org/docs/download.html
		"i18n"                  : "vendor/i18n",                      // http://requirejs.org/docs/download.html
		"jquery"                : "vendor/jquery-1.11.3.min",         // https://jquery.com/download/
		"jquery-ui"             : "vendor/jquery-ui.min",             // https://jqueryui.com/
		"jquery.mockjax"        : "vendor/jquery.mockjax",            // https://github.com/jakerella/jquery-mockjax
		"bootstrap"             : "vendor/bootstrap.min",             // http://getbootstrap.com/getting-started/

		"restAPI"               : "restAPI",
		"mockAPI"               : "mockAPI",
		"util"                  : "util",
	},
	shim    : {
		"knockoutAMDHelpers"    : ["knockout"],
		"knockoutValidation"    : ["knockout"],
		"jquery-ui"             : ["jquery"] 
	},
	urlArgs: "v=1.0.0&cachebust=" +  ( new Date() ).getTime()
});

/* callback based on environment variables */
(function(w) {
	var ls = w.localStorage;
	ls.env = JSON.stringify(browserConfig || {});
	function getProp(p) { return JSON.parse(ls.env)[p] };
	function setProp(p, v) { ls.env[p] = JSON.stringify(v) };

	if(getProp('envType') !== 'dev') {
		window.console.log = function() {};
		window.console.info = function() {};
	}
	
})(window);
