var alchemist = {};

(function( alchemist ){

	document.title = PROTOTYPE_NAME;

	// Enable Mobile Zoom
	if( options.MobileZoom ) {
		_vp = document.querySelector("meta[name=viewport]");
		_vp.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
	}

	// Load Data.json
    $.getJSON('data.json', function(json) {
        alchemist.db = json.data.db;
        alchemist.var = json.data.var;
    });

})( alchemist );