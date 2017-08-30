var Marionette = require('backbone.marionette'); 

var rentalAgreementLayoutView = Marionette.LayoutView.extend({
	tagName: 'div',
    className: 'rentalLayout',

    regions: {
      	rentalAgreement: "#rentalAgreement",
      	rentalPreview: "#rentalPreview"
    },

    printingSpaceDivHeight: {
      	"Bangalore": 750,
      	"Mumbai": 650,
      	"Pune": 650,
      	"Chennai": 600
    },

    initialize: function () {
    }
});

module.exports = rentalAgreementLayoutView;