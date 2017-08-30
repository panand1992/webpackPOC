var Marionette = require('backbone.marionette');

//var 


var Router = Marionette.AppRouter.extend({
  	appRoutes: {
	    '': 'home'
  	},

  	/** Initialize our controller with the options passed into the application,
      such as the initial posts list.
  	*/
  	initialize: function() {
	  	//
	  	console.log("oye");
  	}
});

module.exports = Router;