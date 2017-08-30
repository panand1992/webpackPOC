var Marionette = require('backbone.marionette'); 

var rentalAgreementView = Marionette.ItemView.extend({
	initialize: function (options) {
		_.extend(this,options);
	}
});

module.exports = rentalAgreementView;