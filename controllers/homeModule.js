var Backbone = require('backbone'); 
var BaseModule = require('./baseModule');
var HomepageView = require('../views/homePageView');
var FilterPanel = require('../views/modals/filterPanel');

var HomeModule = BaseModule.extend({
	initialize: function(options) {
  		_.extend(this, options);
  	},

  	navHelpers: {
      	'': 'home',
      	'?:queryparams': 'home',
      	'search/:searchCategory?:queryParams': 'searchHomePage',
      	':city/rent': 'searchPage', // handling city/rent urls from desktop
      	':city/buy': 'searchPage', // handling city/sale urls from desktop
      	':city/pg': 'searchPage',
      	':city/shared': 'searchPage',
      	':city/flatmates': 'searchPage', // handling city/pg urls from desktop
      	'androidApp': 'home'
    },

    home: function (params) {
      	var queryParams = this.extractQueryParams(params),
          	headerOptions = {currentView: 'homePage'};

      	var homePageView = new HomepageView({
        	//model: this.userModel,
        	queryParams: queryParams
      	});

      	// this.getPaymentStatus(params);
      	if (queryParams.nbpay){
	        queryParams.fromPayment = true;
	        queryParams.isDisplayActivePlan = true;
	        //this.userModel.isPaymentSuccess(queryParams, _.bind(this.checkPaymentStatus, this))
      	}

      	if (queryParams.showAppointments == "true") {
        	//vent.trigger('tenantMeetingsList');
      	}

      	this.contentRegion.show(homePageView);
      	this.showPageHeader({currentView: 'homePage'});
      	//this.userModel.headerOptions = {currentView: 'homePage'};
    },

    searchHomePage: function (searchCategory) {
      	this.searchPage(null, searchCategory);
    },

    searchPage: function (city,searchCategory) {
      	var searchView,
          	currentFragment;

      	if (!searchCategory) {
        	currentFragment = Backbone.history.fragment.split('/');
        	searchCategory = currentFragment[1];
      	}
      	if ('flatmates' === searchCategory){
        	searchCategory = 'shared';
      	}

      	searchView = new FilterPanel({
        	viewCategory: searchCategory,
        	showPage: 'search'
      	});

      	this.contentRegion.show(searchView);
      	this.showPageHeader({currentView: 'searchView'});
      	//this.userModel.headerOptions = true;
    }
});

module.exports = HomeModule;