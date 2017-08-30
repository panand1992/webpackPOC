var CustomRouter = require('./customRouter'); 
var allRoutes = require('./allRoutes');

var Router = CustomRouter.extend({
  	appRoutes: allRoutes.pages,

  	initialize: function(options) {
	  	_.extend(this,options);
  	}
});

module.exports = Router;