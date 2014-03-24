// Contains the core alchemy functionality.
// Prototypers shouldn't have to edit this file.

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
        alchemist.vars = json.data.var;
    });

    alchemist.Components = {
    	// get the components and save here as "alchemyComponent" objects (see Getting Started for structure of this component)
    }

    // We should put the alchemist.reactions in a separate file: Ideally, that's the only JavaScript code the prototyper should have to touch.

    // Alchemy Reactions
    alchemist.Reactions = {

    	flipWaldo: function(){
    		// flip alchemist.components.Waldo( Waldo2 )
    		
    		/*
    		Is it possible to somehow create functionality that lets us use jQuery transitions the same way we decide to call the "flip" transition?
    		For example: instead of calling $(jqueryObj).fade(), you could call alchemyObject.fade( args ) and alchemyObject.flip( args )
    		*/
    	},
    	reaction2: function(){
    		// do something
    	},
    	reaction3: function(){
    		// do something
    	}

	};


	// Alchemy Triggers
	// - to-do: initialize the triggers
	// - if they call a trigger 

})( alchemist );