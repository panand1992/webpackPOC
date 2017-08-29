var Marionette = require('backbone.marionette'); 

var customRouter = Marionette.AppRouter.extend({
	
	processAppRoutes: function (controller, appRoutes) {
      	if (!appRoutes) { return; }
  
      	var routeNames = appRoutes.reverse(); // Backbone requires reverted order of routes
  
      	_.each(routeNames, function (route) {
        	this._addAppRoute(controller, route.route, route.name);
      	}, this);
    },

    _addAppRoute: function (controller, route, methodName) {
      	var method = controller[methodName];
  
      	if (!method) {
        	throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
      	}
  
      	this.route(route, methodName, _.bind(method, controller));
    }
});

module.exports = customRouter;