Alchemy-RP
==========
+++ Getting Started (Developers) -----------------------------------------------------------

	About: Alchemy RP aims to make it easy to rapidly produce interactive motion prototypes.
	       It works by providing a minimal interactive framework based on two simple things: Components and Reactions.

	To-Do: 1 - Getting the application to initialize and set up properly when it loads.
		   2 - Get the Waldo panel to flip when the flipWaldo reaction is triggered, using the structure below (or an improved structure).
		   3 - Start wiring up all of the alchemyComponent public methods

		   NOTE: If you know what you're doing and have better ideas of how to structure something: by all means, please do it.


+++ Code Structure ------------------------------------------------------------------

	// Alchemy Application
	// ------------------------------

	alchemist

		- [public properties]
			- Components: { alchemyComponent, ... } 		// Anything with a data-alch-name
			- Reactions: { custom reactions called when a trigger is pulled, ... }			// All of the reactions that occur when a trigger is pulled.
			- vars: {}				// Namespace for custom prototype variables (low priority development)
			- db: {}				// Quick database for iterators (low priority development)

		- [public methods]
			- reset


	// Alchemy Component Object: Define by setting data-alch-component
	// ------------------------------

	alchemyComponent

		- [public properties]
			- el: <the_compoenent_element 
					data-alch-name
					data-alch-type
					data-alch-trigger>
			- name: "The value of data-alch-component"
			- state: { isFlipped, isVisible, tbd... }
			- type: panel || panel-alt-content || chart-pie || chart-bar || tbd...

			- trigger
				- on: click || drag || tbd...
				- reaction: alchemist.Reactions{reaction}

		- [public methods]
			- show
			- hide
			- toggle
			- [Transition Effects]
			- drag
			- tbd...


+++ Feature List (needs some work) -----------------------------------------------------------


Interaction Properties
---------------------------------
Draggable
Droppable
// Resizable
// Selectable
// Sortable


Transition Effects
---------------------------------
Easing Functions
Blind Effect
Bounce Effect
Clip Effect
Drop Effect
Explode Effect
Fade Effect
Fold Effect
Highlight Effect
Pulsate Effect
Scale Effect
Shake Effect
Slide Effect
Transfer Effect – In jQuery, but we should write our own so the component actually shrinks (instead of that ugly dotted line effect)
Shuffle Effect - Not in jQuery
Flip Effect - Not in jQuery
Perspective Effect - Not in jQuery


Data Visualization
---------------------------------
Dummy Pie Chart
Dummy Line Graph


Icon Gallery
---------------------------------
http://fontawesome.io/icons/


Responsive
---------------------------------
xs (< 768px)
sm (>= 768px)
md (>= 992px)
lg (>= 1200px)
