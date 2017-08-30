var BaseModule = require('./baseModule');
var RentalAgreementModel = require('../models/rentalAgreement/rentalAgreementModel');
var RentalAgreementLayoutView = require('../views/rentalAgreement/rentalLayout')
var RentalAgreementView = require('../views/rentalAgreement/rentalAgreement')

var RentalAgreementModule = BaseModule.extend({
	initialize: function (options) {
      	_.extend(this, options);
    },

    navHelpers: {
      	'rentalAgreement/': 'showRentalAgreement',
      	'rental-agreement(/)': 'showRentalAgreementMobile',
      	'online-rental-agreements(?:queryparams)': 'showRentalAgreementMobile',
      	'rental-agreement/:id':'showRentalAgreement',
      	'track-ra-status/:id' : "showRATrackStatus"
    },

    showRentalAgreementMobile: function(id, params) {
    	var ua = navigator.userAgent,
      	mobilePattern = '/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/',
      	pattern = new RegExp(mobilePattern),
      	isMobile = pattern.test(ua);
      	if (isMobile){
      		// this.getPaymentStatus(params);
	        if (id){
	          	var rentalAgreementModel = new RentalAgreementModel({id: id});
	          	rentalAgreementModel.fetch({
	            	success:_.bind(this.rentalAgreementModelFetched,this, isMobile, params, true)
	          	});
	        }
	        else { 
	          	var rentalAgreementModel = new RentalAgreementModel();
	          	this.rentalAgreementModelFetched(isMobile, params, false,rentalAgreementModel);
	        }
      	}
      	else{

      	}
    },

    showRentalAgreement: function (id, params) {
    
    },

    rentalAgreementModelFetched:function (isMobile, params, isFetched, rentalAgreementModel) {
      	rentalAgreementModel.set('isMobile', isMobile);
      	var rentalAgreementLayoutView = new RentalAgreementLayoutView(
      	{
	        model: rentalAgreementModel,
	        isMobile:isMobile,
	        isFetched: isFetched
      	});
      	// if(!isMobile){
      	//   this.headerRegion.empty();
      	// }  
      	this.contentRegion.show(rentalAgreementLayoutView);
      	this.showPageHeader(true);
      	var rentalAgreementView = new RentalAgreementView({
	        model: rentalAgreementModel,
	        isMobile:isMobile,
	        isFetched: isFetched,
	        userModel: this.userModel
      	});
      	rentalAgreementLayoutView.getRegion('rentalAgreement').show(rentalAgreementView);
      	//this.getPaymentStatus(params);
    },

    showRATrackStatus: function(id) {

    }
});

module.exports = RentalAgreementModule;