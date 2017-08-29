var Marionette = require('backbone.marionette');

var nbRootView = Marionette.LayoutView.extend({
	el: '#rootContent',

  	template: require('../templates/core/nbRootView.html'),

  	regions: {
    	header: '#header',
      	content: '#content',
      	footer: '#footer',
  	},

  	onShow: function() {
  		
  	}
});

module.exports = nbRootView;