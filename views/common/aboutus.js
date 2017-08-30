var Marionette = require('backbone.marionette'); 

var aboutUs = Marionette.ItemView.extend({
	tagName: 'div',

    className: 'aboutUs',

    template: require('../../templates/independent/aboutus.html')
});

module.exports = aboutUs;