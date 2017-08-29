var Marionette = require('backbone.marionette'); 
var NbRootView = require('./views/nbRootView');
var NavController = require('./controllers/navController');

var Routers = require('./routers/router');

var nbApp = new Marionette.Application();

nbApp.on('start', function(){
	var nbRootView = new NbRootView();
    nbRootView.render();

    var options = {
      	headerRegion: nbRootView.getRegion('header'),
      	contentRegion: nbRootView.getRegion('content'),
      	//subContentRegion: nbRootView.getRegion('subContent'),
      	footerRegion: nbRootView.getRegion('footer'),
      	//modalsRegion: nbRootView.getRegion('modals'),
      	// userModel: userModel,
      	// chatUtil: chatUtil
    };
    this.routers = new Routers({
      	//rootView: nbRootView,
      	controller: new NavController(options)
      	//userModel: userModel
    });
});


module.exports = nbApp;