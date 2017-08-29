var Marionette = require('backbone.marionette');
//var materialize = require('materialize-css/dist/js/materialize.js');

var nbHomePage = Marionette.ItemView.extend({
	template: require('../templates/home/pageHeader.html'),

    tagName: 'div',

    className: '',

    initialize: function(options) {
  		_.extend(this,options);
  	}
});

module.exports = nbHomePage;