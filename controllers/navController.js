var Marionette = require('backbone.marionette');
var BaseNavModule = require('./baseNavModule'); 

var NavController = BaseNavModule.extend({
	modules: {},

  	initialize: function(options) {
  		BaseNavModule.prototype.initialize.apply(this, arguments);
      	_.extend(this,options);
  	},

  	/* Home Module - Starts */
    home: function (params) {
      	this.getModule('home', arguments);
    },

    searchHomePage: function (searchCategory) {
      	this.getModule('searchHomePage', arguments);
    },

    searchPage: function (city,searchCategory) {
      	this.getModule('searchPage', arguments);
    },

    /* Rental Agreement*/
    showRentalAgreementMobile: function () {
        this.getModule('showRentalAgreementMobile', arguments);
    },

    showRentalAgreement: function (id) {
        this.getModule('showRentalAgreement', arguments);
    },
    showRATrackStatus : function(id){
        this.getModule('showRATrackStatus', arguments);  
    },

    /* Independent*/
    rentReceipt: function (id) {
        this.getModule('rentReceipt', arguments);
    },

    termsAndConditions: function () {
        this.getModule('termsAndConditions', arguments);
    },

    aboutUs: function () {
        this.getModule('aboutUs', arguments);
    },

    showTestimonials: function () {
        this.getModule('showTestimonials', arguments);
    },

    verifyEmail: function (emailId,token) {
        this.getModule('verifyEmail', arguments);
    },

    coupon10k: function (tokenParam) {
        this.getModule('coupon10k', arguments);
    },
});

module.exports = NavController;